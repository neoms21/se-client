import * as types from './squad.actionTypes';

export const fetchSquads = (userId) => ({
    type: types.FETCH_SQUADS,
    payload: userId
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

export const fetchSquadSuccess = (squads) => (
    {
        type: types.FETCH_SQUADS_SUCCESS,
        payload: squads
    });

export const createSquadFailure = (errors) => ({
    type: types.CREATE_SQUAD_FAILURE,
    errors: errors
});

export const fetchSquadFailure = (errors) => ({
    type: types.FETCH_SQUADS_FAILURE,
    errors: errors
});
