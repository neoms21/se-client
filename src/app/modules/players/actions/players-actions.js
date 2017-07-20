import * as types from './players.actionTypes';

export const createPlayer = (player) => {
    return {
        type: types.CREATE_PLAYER,
        payload: {player: player}
    }
};
// //
export const createPlayerSuccess = (player) => (
    {
        type: types.CREATE_PLAYER_SUCCESS,
        squadId: player.squadId
    });

export const fetchPlayers = (squadId) => ({
    type: types.FETCH_PLAYERS,
    payload: squadId
});

export const setSelectedPlayer = (player) => ({
    type: types.SET_SELECTED_PLAYER,
    payload: player
});

export const clearSelectedPlayer = (player) => ({
    type: types.CLEAR_SELECTED_PLAYER
});

export const fetchPlayersSuccess = (players) => (
    {
        type: types.FETCH_PLAYERS_SUCCESS,
        payload: players
    });

export const createPlayerFailure = (errors) => {
    console.log(errors);
    return ({
        type: types.CREATE_PLAYER_FAILURE,
        errors: errors
    })
};
export const fetchPlayersFailure = (errors) => ({
    type: types.FETCH_PLAYERS_FAILURE,
    errors: errors
});
export const deletePlayerSuccess = (id) => {

    return ({
        type: types.DELETE_PLAYER_SUCCESS,
        payload: id
    })
};
export const deletePlayerFailure = (errors) => ({
    type: types.DELETE_PLAYER_FAILURE,
    errors: errors
});

export const deletePlayer = (player) => ({
    type: types.DELETE_PLAYER,
    payload: {player: player}
});
