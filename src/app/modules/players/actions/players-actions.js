import * as types from './players.actionTypes';

export const createPlayer = (player) => {
  console.log(player);
  return {
    type: types.CREATE_PLAYER,
    payload: {player: player}
  };
};

export const createPlayerSuccess = (squad) => (
  {
    type: types.CREATE_PLAYER_SUCCESS
  });

export const fetchPlayers = (squadInfo) => ({
  type: types.FETCH_PLAYERS,
  payload: { id: squadInfo }
});

export const fetchPlayersSuccess = (players) => (
  {
    type: types.FETCH_PLAYERS_SUCCESS,
    payload: players
  });

export const fetchPlayersFailure = (errors) => ({
  type: types.FETCH_PLAYERS_FAILURE,
  errors: errors
});
