import * as ActionTypes from '../actions/actionTypes';
import {sendCommand, login} from '../../../services/server-service';
import * as userActions from '../actions/user-actions';

export const registerUserEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER)
        .mergeMap(action =>
            sendCommand('RegisterUser', action.user)
                .map(ev => ev.isFailure ? userActions.registerUserFailure(ev.errors)
                    : userActions.registerUserSuccess(ev.user)) // output success
        );

export const signinUserEpic = action$ =>
    action$.ofType(ActionTypes.SIGNIN_USER)
        .mergeMap(action =>
            login(action.user.userName, action.user.password)
                .map(ev => ev.isFailure ? userActions.signinUserFailure(err)
                    : userActions.signinUserSuccess(ev.user)) // output success
        );
