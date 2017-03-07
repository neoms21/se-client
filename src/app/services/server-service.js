//import {ConfigService} from './config-service';
import io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import * as uuid from 'uuid';

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

    fetch('http://localhost:8180/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userName: email, password: password})
    })
        .then(function (resp) {
            if (resp.status === 200) {
                // logged in ok, so
                resp.json()
                    .then((respObject) => {
                        console.log('Authenticated user ' + email);
                        // store token
                        token = respObject.token;
                        // tell server that we are now authenticating the socket
                        socket.emit('authentication', respObject);
                    });
            } else {
                // error logging in
                resp.text()
                    .then(respText => {
                        console.log('error ' + respText)
                    });
            }
        })
        .catch(function (err) {
            console.log('err' + err);
        });

    // ajax.post('http://localhost:8180/login', {userName: email, password: password})
    //     .subscribe(resp => {
    //         console.log(resp)
    //             token = resp;
    //
    //             // now connect with token
    //             socket = io.connect('http://localhost:8180', {request: token});
    //
    //             socket.on('event', processReceiveEvent);
    //             socket.on('connect', function () {
    //                 console.log('authenticated');
    //             }).on('disconnect', function () {
    //                 console.log('disconnected');
    //             });
    //         }, (err) => {
    //             console.log('@@@@@' + err.xhr)
    //         }
    //     );

    // socket.emit('authentication', {username: email, password: password});
    // socket.on('authenticated', (xxx) => {
    //     // use the socket as usual, as user has been authenticated
    //     console.log('authenticated ');
    //     isAuthenticated = true;
    // });
    // socket.on('unauthorized', (err) => {
    //     // either user name or password didnt match
    //     console.log("There was an error with the authentication:", err.message);
    //     isAuthenticated = false;
    //
    //     // create an event to send for any components that need an event, maybe promise better?!?!?
    //     let resp = {};
    //     resp.eventName = 'LoginFailed';
    //     streamForGeneral.next(resp);
    // });
};

const sendCommand = (name, payload) => {

    // need to give it a correlation id
    let command = {properties:{commandName: name, correlationId: uuid.v4()}, payload: payload};
    // create observable for client
    let clientObserver = new Subject();
    // console.log( clientObserver.subscribe(console.log));
    streamForCommand[command.correlationId] = clientObserver;

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
    let query = {properties:{queryName: name ,correlationId: uuid.v4()}, payload: payload};
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
    if (event.query.properties.correlationId) {
        // happy days, find right observable
        streamForQuery[event.query.properties.correlationId].next(event); // pass it on
    } else {
        console.log('Query event with no correlation id ', event.query.properties);
    }
};


init();

export {login, sendCommand, sendQuery};