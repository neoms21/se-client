import * as ActionTypes from '../actions/actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as userActions from '../actions/user-actions';

export const registerUserEpic = action$ =>
    action$.ofType(ActionTypes.REGISTER_USER)
        .mergeMap(action => {
            sendCommand('RegisterUser', action.user)
                .subscribe(ev => userActions.registerUserSuccess(ev.user) // output success
                    , err => userActions.registerUserFailure(err)); // oops failure
        });
