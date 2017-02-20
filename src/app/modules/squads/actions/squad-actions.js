import * as types from './squad.actionTypes';

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

// export const createSquadSuccess = function (squad) {
//     console.log('in succ');
//     console.log(squad);
//     return {type: types.CREATE_SQUAD_SUCCESS, squad: squad}
// }

export const createSquadFailure = (errors) => ({
    type: types.CREATE_SQUAD_FAILURE,
    errors: errors
});
