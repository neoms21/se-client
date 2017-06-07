import * as ActionTypes from '../actions/players.actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as playerActions from '../actions/players-actions';

import {sendQuery} from '../../../services/server-service';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';


export const createPlayerEpic = action$ => action$.ofType(ActionTypes.CREATE_PLAYER)
    .mergeMap(action => sendCommand('CreatePlayer', action.payload)
        .map(ev => ev.errors && ev.errors.length > 0 ? playerActions.createPlayerSuccess(ev.errors)
            : playerActions.createPlayerSuccess(action.player)));

export const fetchPlayersEpic = action$ => action$.ofType(ActionTypes.FETCH_PLAYERS)
    .mergeMap(action => sendQuery('FetchPlayers', {id: action.payload})
        .map(ev => ev.isFailure ? playerActions.fetchPlayersFailure(ev.errors)
            : playerActions.fetchPlayersFailure(ev.data)));