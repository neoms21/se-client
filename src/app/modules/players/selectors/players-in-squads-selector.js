import { createSelector } from 'reselect';

const getSquadId = state => state.EditMatchForm.values.squad;
const getPlayers = state => state.players;

export const getPlayersInSquad = createSelector(
  [getSquadId, getPlayers],
  (squadId, players) => {

  }
);