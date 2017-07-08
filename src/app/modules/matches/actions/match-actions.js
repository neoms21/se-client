import * as types from './actionTypes';

export const createMatch = (matchInfo) => ({
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

export const addSelection = (selectionInfo) => ({
  type: types.ADD_SELECTION,
  matchSelection: selectionInfo
});

export const deleteSelection = (selectionInfo) => ({
  type: types.DELETE_SELECTION,
  matchSelection: selectionInfo
});

export const createMatchSelection = (selectionInfo, matchId) => ({
  type: types.CREATE_MATCH_SELECTION,
  selectionInfo: selectionInfo,
  matchId: matchId
});

export const createMatchSelectionSuccess = (payload) => ({
  type: types.CREATE_MATCH_SELECTION_SUCCESS,
  matchSelection: payload
});

export const createMatchSelectionFailure = (errors) => ({
  type: types.CREATE_MATCH_SELECTION_FAILURE,
  errors: errors
});
