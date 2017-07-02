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

export const createMatchSelection = (matchInfo) => ({
  type: types.CREATE_MATCH_SELECTION,
  matchInfo: matchInfo
});

export const createMatchSelectionSuccess = (payload) => ({
  type: types.CREATE_MATCH_SELECTION_SUCCESS,
  match: payload
});

export const createMatchSelectionFailure = (errors) => ({
  type: types.CREATE_MATCH_SELECTION_FAILURE,
  errors: errors
});


