import * as ActionTypes from '../actions/squad.actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as squadActions from '../actions/squad-actions';
import { Observable } from 'rxjs';
import {connect} from 'react-redux';

export const createSquadEpic = function xyz(action$) {
    return action$.ofType(ActionTypes.CREATE_SQUAD)
        .switchMap(action => {
            console.log(action);
            return sendCommand('CreateSquad', action.squad)
            // .subscribe(ev => squadActions.createSquadSuccess(action.squad) // output success
            //     , err => squadActions.createSquadFailure(err)); // oops failure
        });
};
