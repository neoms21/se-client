import * as ActionTypes from '../actions/players.actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as playerActions from '../actions/players-actions';
import {Observable} from 'rxjs';
import {connect} from 'react-redux';


export const createPlayerEpic = action$ => action$.ofType(ActionTypes.CREATE_PLAYER)
    .mergeMap(action => sendCommand('CreatePlayer', action.payload)
        .map(ev => ev.errors && ev.errors.length > 0 ? playerActions.createPlayerSuccess(ev.errors)
            : playerActions.createPlayerSuccess(action.player)));
//
// export const fetchSquadsEpic = action$ => action$.ofType(ActionTypes.FETCH_SQUADS)
//     .mergeMap(action => sendQuery('FetchSquads')
//         .map(ev => ev.isFailure ? playerActions.fetchSquadFailure(ev.errors)
//             : playerActions.fetchSquadSuccess(ev.data)));