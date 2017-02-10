import * as ActionTypes from '../actions/actionTypes';
import {sendCommand, login} from '../../../services/server-service';
import * as userActions from '../actions/user-actions';
import {push} from 'react-router-redux';

export const registerUserEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER)
        .mergeMap(action =>
            sendCommand('RegisterUser', action.user)
                .map(ev => ev.isFailure ? userActions.registerUserFailure(ev.errors)
                    : userActions.registerUserSuccess(ev.user)) // output success
        );

// when we are doing signing in , call login on server, and then send appropriate action
export const signinUserEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER)
        .mergeMap(action =>
                login(action.user.userName, action.user.password)
                    .map(resp => userActions.signinUserSuccess(resp))
                    .catch(err => Observable.of(userActions.signinUserFailure(err)))
            // .map(ev => ev.isFailure ? userActions.signinUserFailure(ev.error)
            //     : userActions.signinUserSuccess(ev.user)) // output success
        );

// when sign in was successful, send action to go to home
export const signinUserSuccessEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/'))); // change route to home on successful signin
