import * as ActionTypes from '../actions/squad.actionTypes';
import {sendCommand} from '../../../services/server-service';
import {sendQuery} from '../../../services/server-service';
import * as squadActions from '../actions/squad-actions';
import {push} from 'react-router-redux';
import {Observable} from 'rxjs';

export const createSquadEpic = action$ => action$.ofType(ActionTypes.CREATE_SQUAD)
    .mergeMap(action => sendCommand('CreateSquad', action.squad)
        .map(ev => ev.errors && ev.errors.length > 0 ? squadActions.createSquadFailure(ev.errors)
            : squadActions.createSquadSuccess(action.squad)));

export const createSquadSuccessEpic = action$ => action$.ofType(ActionTypes.CREATE_SQUAD_SUCCESS)
    .mergeMap(action => {
        console.log(action);
        return Observable.of(push('/squads'))
    });


export const fetchSquadsEpic = action$ => action$.ofType(ActionTypes.FETCH_SQUADS)

    .mergeMap(action => sendQuery('FetchSquads', {userId: action.payload})
        .map(ev => ev.isFailure ? squadActions.fetchSquadFailure(ev.errors)
            : squadActions.fetchSquadSuccess(ev.data)));

export const deleteSquadEpic = action$ => action$.ofType(ActionTypes.DELETE_SQUAD)
    .mergeMap(action => sendCommand('DeleteSquad', action.payload)
        .map(ev => ev.errors && ev.errors.length > 0 ?
            squadActions.deleteSquadFailure(ev.errors)
            : squadActions.deleteSquadSuccess(action.payload)));
