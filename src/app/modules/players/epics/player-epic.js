import * as ActionTypes from '../actions/players.actionTypes';
import { sendCommand, sendQuery } from '../../../services/server-service';
import * as playerActions from '../actions/players-actions';


export const createPlayerEpic = action$ => action$.ofType(ActionTypes.CREATE_PLAYER)
  .mergeMap(action => sendCommand('CreatePlayer', action.payload)
    .map(ev => ev.errors && ev.errors.length > 0 ? playerActions.createPlayerSuccess(ev.errors)
      : playerActions.createPlayerSuccess(action.player)));

export const fetchPlayersForSquadsEpic = action$ => action$.ofType(ActionTypes.FETCH_PLAYERS)
  .mergeMap(action => sendQuery('FetchPlayers', action.payload)
    .map(ev =>
      ev.isFailure ? playerActions.fetchPlayersFailure(ev.errors)
      : playerActions.fetchPlayersSuccess(ev.data)));