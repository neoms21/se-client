import * as ActionTypes from '../actions/squad.actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as squadActions from '../actions/squad-actions';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';


export const createSquadEpic = action$ => action$.ofType(ActionTypes.CREATE_SQUAD)
    .mergeMap(action => sendCommand('CreateSquad', action.squad)
        .map(ev => ev.isFailure ? squadActions.createSquadFailure(ev.errors)
            : squadActions.createSquadSuccess(action.squad)));