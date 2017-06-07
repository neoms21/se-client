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

export const fetchPlayers = (squadId) => ({
    type: types.FETCH_PLAYERS,
    payload: squadId
});

export const fetchPlayersSuccess = (squads) => (
    {
        type: types.FETCH_PLAYERS_SUCCESS,
        payload: squads
    });

export const createPlayerFailure = (errors) => ({
    type: types.CREATE_PLAYERS_FAILURE,
    errors: errors
});
export const fetchPlayersFailure = (errors) => ({
    type: types.FETCH_PLAYERS_FAILURE,
    errors: errors
});
