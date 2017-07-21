import * as types from './actionTypes';
import * as uuid from 'uuid';

export const createMatch = (matchInfo, selections) => ({
  type: types.CREATE_MATCH,
  matchInfo: matchInfo
});

export const createMatchSuccess = (payload) => ({
  type: types.CREATE_MATCH_SUCCESS,
  match: payload
});

export const createMatchFailure = (errors) => ({
  type: types.CREATE_MATCH_FAILURE,
  errors: errors
});

export const addMatchSelection = (selectionInfo) => ({
  type: types.ADD_MATCH_SELECTION,
  matchSelection: {...selectionInfo, selectionId: uuid.v4()}
});

export const editMatchSelection = (selectionInfo) => ({
  type: types.EDIT_MATCH_SELECTION,
  matchSelection: {...selectionInfo}
});

export const saveMatchSelection = (selectionInfo) => ({
  type: types.SAVE_MATCH_SELECTION,
  matchSelection: {...selectionInfo}
});

export const deleteMatchSelection = (selectionId) => ({
  type: types.DELETE_MATCH_SELECTION,
  matchSelection: {selectionId}
});

export const addMatchInfo = (info) => ({
  type: types.ADD_MATCH_INFO,
  info: {...info, matchId: uuid.v4()}
});

