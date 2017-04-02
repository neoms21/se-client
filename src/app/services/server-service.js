//import {ConfigService} from './config-service';
import io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import * as uuid from 'uuid';
import request from 'superagent';

// this controls interaction with server using socket.io

let socket;
let streamForCommand;
let streamForQuery;
let streamForGeneral;
let token;

const init = () => {
    try {
        streamForCommand = {};
        streamForQuery = {};
        streamForGeneral = new Subject();

        let connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            "timeout": 10000, //before connect_error and connect_timeout are emitted.
            "transports": ["websocket"]
        };
        socket = io.connect('http://localhost:8180', connectionOptions);

        socket.on('event', processReceiveEvent);
        socket.on('commandEvent', processReceiveCommandEvent);
        socket.on('queryEvent', processReceiveQueryEvent);
    }
    catch (err) {
        console.log(err);
    }
};

// const reconnect = () => {
//
//     socket.disconnect();
//     socket.connect('http://localhost:8180', {
//         extraHeaders: {
//             Authorization: "Bearer authorization_token_here"
//         }
//     });
// };

const login = (email, password) => {
    // login needs it own observable - would this be better as promise???
    const ret = new Subject();

    request.post('http://localhost:8180/login')
        .send({
            userName: email,
            password: password
        })
        .then((resp) => {
            if (resp.status === 200) {
                // logged in ok, so get response out
                console.log('Authenticated user ' + email);
                // store token
                token = resp.body.token;
                // tell server that we are now authenticating the socket
                socket.emit('authentication', resp.body);
                ret.next({userName: email});
            }
            else {
                // error logging in
                console.log('error ' + resp.text);
                ret.error(resp.text);
            }
        })
        .catch((errResp) => {
            // something bad happened
            console.log(errResp);
            ret.error(errResp);
        });

    return ret;
};

const sendCommand = (name, payload) => {

    // need to give it a correlation id
    let command = {
        properties: {
            commandName: name,
            correlationId: uuid.v4()
        }
    };

    // add the payload to the command
    Object.assign(command, {payload: payload});

    // create observable for client
    let clientObserver = new Subject();
    streamForCommand[command.properties.correlationId] = clientObserver;
    // console.log( clientObserver.subscribe(console.log));

    // send it
    try {
        socket.emit('command', command);
    }
    catch (err) {
        clientObserver.error(err);
    }

    // let consumer have it
    return clientObserver;
};

const sendQuery = (name, payload) => {

    // need to give it a correlation id
    let query = {properties: {queryName: name, correlationId: uuid.v4()}, payload: payload};
    // create observable for client
    let clientObserver = new Subject();
    // console.log( clientObserver.subscribe(console.log));
    streamForQuery[query.properties.correlationId] = clientObserver;

    // send it
    try {
        socket.emit('query', query);
    }
    catch (err) {
        console.log(err);
        clientObserver.error(err);
    }

    // let consumer have it
    return clientObserver;
};

const processReceiveEvent = (event) => {
    streamForGeneral.next(event);
};

const processReceiveCommandEvent = (event) => {
    if (event.command.properties.correlationId) {
        // happy days, find right observable
        streamForCommand[event.command.properties.correlationId].next(event); // pass it on
    } else {
        console.log('Command event with no correlation id ', event.properties);
    }
};

const processReceiveQueryEvent = (event) => {
    // console.log(streamForQuery);
    // console.log(event);
    if (event.query.properties.correlationId) {
        // happy days, find right observable
        streamForQuery[event.query.properties.correlationId].next(event); // pass it on
    } else {
        console.log('Query event with no correlation id ', event.query.properties);
    }
};

init();

export {login, sendCommand, sendQuery};