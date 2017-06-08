import * as ActionTypes from '../actions/actionTypes';
import {sendCommand, login} from '../../../services/server-service';
import * as userActions from '../actions/user-actions';
import {push} from 'react-router-redux';

export const registerUserEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER)
        .mergeMap(action =>
            sendCommand('RegisterUser', action.user)
                .map(ev => {
                    console.log(ev);
                    return ev.properties.isFailure ? userActions.registerUserFailure(ev.errors)
                        : userActions.registerUserSuccess(ev.user);
                }) // output success
        );

// when we are doing signing in , call login on server, and then send appropriate action
export const signinUserEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER)
        .mergeMap(action =>
            login(action.user.userName, action.user.password)
                .map(resp => userActions.signinUserSuccess(resp))
                .catch(err => {
                   // console.log(err);
                    return Observable.of(userActions.signinUserFailure(err))
                })
        );

// when sign in was successful, send action to go to home
export const signinUserSuccessEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/squads'))); // change route to home on successful signin

export const registerUserSuccessEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/squads'))); // change route to home on successful register