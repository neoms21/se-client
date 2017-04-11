import * as types from './actionTypes';

export const createMatch = (matchInfo) => ({
    type: types.CREATE_MATCH,
    matchInfo: matchInfo
});

export const createMatchSuccess = (match) => ({
    type: types.CREATE_MATCH_SUCCESS,
    match: match
});

export const createMatchFailure = (errors) => ({
    type: types.CREATE_MATCH_FAILURE,
    errors: errors
});

export const createFetchTeams = () => ({
    type: types.FETCH_TEAMS
});

export const createFetchTeamsSuccess = (teams) => ({
    type: types.FETCH_TEAMS_SUCCESS,
    teams: teams
});

export const createFetchTeamsFailure = (errors) => ({
    type: types.FETCH_TEAMS_FAILURE,
    errors: errors
});
