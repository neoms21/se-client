import * as types from './squad.actionTypes';

export const fetchSquads = (squadInfo) => ({
    type: types.FETCH_SQUADS,
});

export const createSquad = (squadInfo) => ({
    type: types.CREATE_SQUAD,
    squad: squadInfo
});
//
export const createSquadSuccess = (squad) => (
{
    type: types.CREATE_SQUAD_SUCCESS,
    squad: squad
});

export const fetchSquadSuccess = (squad) => (
{
    type: types.FETCH_SQUADS_SUCCESS,
    squad: squad
});

export const createSquadFailure = (errors) => ({
    type: types.CREATE_SQUAD_FAILURE,
    errors: errors
});
export const fetchSquadFailure = (errors) => ({
    type: types.FETCH_SQUADS_FAILURE,
    errors: errors
});
