//import {ConfigService} from './config-service';
import io from 'socket.io-client';
import {Observable, Subject, ReplaySubject} from 'rxjs';
import * as uuid from 'uuid';
import request from 'superagent';

// this controls interaction with server using socket.io

let socket;
let streamForCommand;
let streamForQuery;
let streamForGeneral;
let token;
let verificationInProgress = false;
let pendingQueries = [];

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
                socket.emit('authentication', resp.body.token);
                ret.next(resp.body);
            }
            else {
                // error logging in
                ret.error(resp.text);
            }
        })
        .catch((errResp) => {
            // something bad happened
            console.log(errResp);
            ret.error('Communication Failure');
        });

    return ret;
};

const verify = (token) => {
    // login needs it own observable - would this be better as promise???
    const ret = new Subject();
    verificationInProgress = true;
    request.post('http://localhost:8180/verify')
        .send({
            token
        })
        .then((resp) => {
            if (resp.status === 200) {
                socket.emit('authentication', token);
                // logged in ok, so get response out
                ret.next(true);
            }
            else {
                console.log(resp);
                // error logging in
                ret.error(false);
            }
        })
        .catch((errResp) => {
            // something bad happened
            console.log(errResp);
            ret.error('Login expired. Please login again');
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
        console.log('sending command ', command)
        socket.emit('command', command);
    }
    catch (err) {
        clientObserver.error(err);
    }

    // let consumer have it
    return clientObserver;
};

function executeQuery(query, clientObserver) {
    try {
        socket.emit('query', query);
    }
    catch (err) {
        console.log(err);
        clientObserver.error(err);
    }
}

const sendQuery = (name, payload) => {
    let clientObserver = new Subject();

    console.log('in send query', payload);
    // need to give it a correlation id
    let correlationId = uuid.v4();
    let query = {properties: {queryName: name, correlationId: correlationId}, payload: payload};
    // create observable for client

    // console.log( clientObserver.subscribe(console.log));
    streamForQuery[query.properties.correlationId] = clientObserver;
    if (verificationInProgress) {
        pendingQueries.push({query: query, observer: clientObserver});
        return clientObserver;
    }

    // send it
    executeQuery(query, clientObserver);

    // let consumer have it
    return clientObserver;
};

const processReceiveEvent = (event) => {

    streamForGeneral.next(event);
    if (event.properties.eventName === 'AuthenticationSucceeded') {
        verificationInProgress = false;
        const clonedQueries = [...pendingQueries];
        pendingQueries.forEach(q => {
            executeQuery(q.query, q.observer);
            pendingQueries = pendingQueries.filter(p => p.query.properties.correlationId !== q.query.properties.correlationId);
        });
    }
};

const processReceiveCommandEvent = (event) => {
    if (event.command.properties.correlationId) {
        // happy days, find right observable
        const stream = streamForCommand[event.command.properties.correlationId];
        stream.next(event); // pass it on
    } else {
        console.log('Command event with no correlation id ', event.properties);
    }
};

const processReceiveQueryEvent = (event) => {
    // console.log(event);
    if (event.query.properties.correlationId) {
        // happy days, find right observable
        const queryStream = streamForQuery[event.query.properties.correlationId];
        if (queryStream) {
            queryStream.next(event); // pass it on
            // is it last response
            // if (event.messageNum === event.totalMessages) {
            //     queryStream.complete();
            // }
        }
    } else {
        console.log('Query event with no correlation id ', event.query.properties);
    }
};

init();

export {login, verify, sendCommand, sendQuery};


// const reconnect = () => {
//
//     socket.disconnect();
//     socket.connect('http://localhost:8180', {
//         extraHeaders: {
//             Authorization: "Bearer authorization_token_here"
//         }
//     });
// };