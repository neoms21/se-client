import * as types from './actionTypes';
import * as uuid from "uuid";

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

export const addMatchSelection = (selectionInfo, matchId) => ({
  type: types.ADD_MATCH_SELECTION,
  matchSelection: {...selectionInfo, selectionId: uuid.v4(), matchId}
});

export const deleteMatchSelection = (selectionInfo) => ({
  type: types.DELETE_MATCH_SELECTION,
  matchSelection: selectionInfo
});

export const addMatchInfo = (info) => ({
  type: types.ADD_MATCH_INFO,
  info: {...info, matchId: uuid.v4()}
});

