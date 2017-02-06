//import {ConfigService} from './config-service';
import io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import * as uuid from 'uuid';

let socket;
let streamForCommand;
let streamForGeneral;
let token;

const init = () => {
    try {
        streamForCommand = {};
        streamForGeneral = new Subject();

        let connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            "timeout": 10000, //before connect_error and connect_timeout are emitted.
            "transports": ["websocket"]
        };
        socket = io.connect('http://localhost:8180', connectionOptions);

        socket.on('event', processReceiveEvent);
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
                        token = respObject;
                        // set authorization
                        socket.emit('authentication', {token: respObject});
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

};

const sendCommand = (name, payload) => {

    // need to give it a correlation id
    let command = {commandName: name, correlationId: uuid.v4(), payload: payload};
    // create observable for client
    let clientObserver = new Subject();
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

const processReceiveEvent = (event) => {
    if (event.correlationId) {
        // happy days, find right observable
        if (event.isFailure) {
            streamForCommand[event.correlationId].error(event); // pass it on as error
        } else {
            streamForCommand[event.correlationId].next(event); // pass it on
        }
    } else {
        streamForGeneral.next(event);
    }
};

init();

export {login, sendCommand};