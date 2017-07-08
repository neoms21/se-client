import * as ActionTypes from '../actions/actionTypes';
import { sendCommand } from '../../../services/server-service';
import * as matchActions from '../actions/match-actions';
import { push } from 'react-router-redux';

export const createMatchEpic = action$ =>
  action$.ofType(ActionTypes.CREATE_MATCH)
    .mergeMap(action =>
      sendCommand('CreateMatch', action.matchInfo)
        .map(ev => ev.properties.isFailure ? matchActions.createMatchFailure(ev.errors) :
          matchActions.createMatchSuccess(ev.payload)
        ) // output success
    );

export const createMatchSuccessEpic = action$ =>
  action$.ofType(ActionTypes.CREATE_MATCH_SUCCESS)
    .mergeMap(action =>
      Observable.of(push(`/match/${action.match.matchId}/selection-list`, action.message)));

export const createMatchSelectionEpic = action$ =>
  action$.ofType(ActionTypes.CREATE_MATCH_SELECTION)
    .mergeMap(action =>
      sendCommand('SaveMatchSelection', {...action.selectionInfo, matchId: action.matchId})
        .map(ev => ev.properties.isFailure ? matchActions.createMatchSelectionFailure(ev.errors) :
            matchActions.createMatchSelectionSuccess(ev.payload),
          (err) =>
            matchActions.createMatchSelectionFailure(['Unable to send command'])) // output success
    );

export const createMatchSelectionSuccessEpic = action$ =>
  action$.ofType(ActionTypes.CREATE_MATCH_SELECTION_SUCCESS)
    .mergeMap(action =>
      Observable.of(push(`/match/${action.matchSelection.matchId}/selection-list`, action.message)));
