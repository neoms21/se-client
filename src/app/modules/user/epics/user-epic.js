import * as ActionTypes from '../actions/actionTypes';
import {sendCommand, login, verify} from '../../../services/server-service';
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
                    return Observable.of(userActions.signinUserFailure(err))
                })
        );

// when we are doing auto sign in , verify the token and redirect to squads if successful
export const verifyTokenEpic = action$ =>
    action$.ofType(ActionTypes.VERIFY_TOKEN)
        .mergeMap(action =>
            verify(action.payload)
                .map(resp => userActions.verifyTokenSuccess(resp))
                .catch(err => {
                    return Observable.of(userActions.verifyTokenFailure(err))
                })
        );

// when sign in was successful, send action to go to home
export const signinUserSuccessEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/squads')));

export const verifyTokenSuccessEpic = action$ =>
    action$.ofType(ActionTypes.VERIFY_TOKEN_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/squads'))); // change route to home on successful signin

export const verifyTokenFailureEpic = action$ =>
    action$.ofType(ActionTypes.VERIFY_TOKEN_FAILURE)
        .mergeMap(action =>
            Observable.of(push('/signin'))); // change route to home on successful signin

export const registerUserSuccessEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/squads'))); // change route to home on successful register