import * as ActionTypes from '../actions/players.actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as playerActions from '../actions/players-actions';
import {push} from 'react-router-redux';
import {sendQuery} from '../../../services/server-service';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';


export const createPlayerEpic = action$ => action$.ofType(ActionTypes.CREATE_PLAYER)
    .mergeMap(action => sendCommand('CreatePlayer', action.payload)
        .map(ev => ev.errors && ev.errors.length > 0 ? playerActions.createPlayerFailure(ev.errors)
            : playerActions.createPlayerSuccess(action.payload)));

export const createPlayerSuccessEpic = action$ => action$.ofType(ActionTypes.CREATE_PLAYER_SUCCESS)
    .mergeMap(action => {
        console.log(action);
        return Observable.of(push(`/squad/${action.squadId}/players`));
    });

export const fetchPlayersEpic = action$ => action$.ofType(ActionTypes.FETCH_PLAYERS)
    .mergeMap(action => sendQuery('FetchPlayers', {id: action.payload})
        .map(ev => ev.isFailure ? playerActions.fetchPlayersFailure(ev.errors)
            : playerActions.fetchPlayersSuccess(ev.data)));


export const deletePlayerEpic = action$ => action$.ofType(ActionTypes.DELETE_PLAYER)
    .mergeMap(action => sendCommand('DeletePlayer', {player: action.payload})
        .map(ev => ev.errors && ev.errors.length > 0 ?
            playerActions.deletePlayerFailure(ev.errors)
            : playerActions.deletePlayerSuccess(action.payload)));
