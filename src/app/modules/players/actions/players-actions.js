import * as types from './players.actionTypes';

export const createPlayer = (player) => {
    console.log(player);
    return {
        type: types.CREATE_PLAYER,
        payload: {player: player}
    }
};
// //
export const createPlayerSuccess = (squad) => (
    {
        type: types.CREATE_PLAYER_SUCCESS,
        //squad: squad
    });

// export const fetchSquadSuccess = (squads) => (
//     {
//         type: types.FETCH_SQUADS_SUCCESS,
//         payload: squads
//     });
//
// export const createSquadFailure = (errors) => ({
//     type: types.CREATE_SQUAD_FAILURE,
//     errors: errors
// });
// export const fetchSquadFailure = (errors) => ({
//     type: types.FETCH_SQUADS_FAILURE,
//     errors: errors
// });
