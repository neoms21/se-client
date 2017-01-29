//import {ConfigService} from './config-service';
import io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import * as uuid from 'uuid';

let socket;
let streamForCommand;
let streamForGeneral;
let isAuthenticated;

const login = (email, password) => {
    socket.emit('authentication', {username: email, password: password});
    socket.on('authenticated', (xxx) => {
        // use the socket as usual, as user has been authenticated
        console.log('authenticated ');
        isAuthenticated = true;
    });
    socket.on('unauthorized', (err) => {
        // either user name or password didnt match
        console.log("There was an error with the authentication:", err.message);
        isAuthenticated = false;

        // create an event to send for any components that need an event, maybe promise better?!?!?
        let resp = {};
        resp.eventName = 'LoginFailed';
        streamForGeneral.next(resp);
    });
};

const sendCommand = (name, command) => {
    // need to give it a correlation id
    command.commandName = name;
    command.correlationId = uuid.v4();
    // send it
    socket.emit('command', command);
    // create observable for client
    let clientObserver = new Subject();
    streamForCommand[command.correlationId] = clientObserver;

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

//todo: is there better way
try {
    streamForCommand = {};
    streamForGeneral = new Subject();
    socket = io('http://localhost:8180');
    socket.on('event', processReceiveEvent);
}
catch (err) {
    console.log(err);
}

export {login, sendCommand};