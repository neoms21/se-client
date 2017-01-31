import * as ActionTypes from '../actions/actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as userActions from '../actions/user-actions';
import * as Observable from 'rxjs/observable/of';

export const registerUserEpic = action$ =>
           action$.ofType(ActionTypes.REGISTER_USER)
               .mergeMap(action =>
                   sendCommand('RegisterUser', action.user)
                       .map(ev => userActions.registerUserSuccess(ev.user)) // output success
//, err => userActions.registerUserFailure(err)); // oops failure
               )
    ;
