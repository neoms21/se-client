import { combineEpics } from 'redux-observable';
import { registerUserEpic, signinUserEpic, signinUserSuccessEpic, registerUserSuccessEpic } from '../modules/user/epics/user-epic';
import { createSquadEpic } from '../modules/squads/epics/squad-epic';
import { fetchSquadsEpic } from '../modules/squads/epics/squad-epic';
import { createSquadSuccessEpic } from '../modules/squads/epics/squad-epic';
import * as AppEpics from './app-epics';
import * as MatchEpics from '../modules/matches/epics/match-epic';
import * as PlayerEpics from '../modules/players/epics/player-epic';

// combine all epics into one
export const rootEpic = combineEpics(
  AppEpics.signinSuccessEpic,
  createSquadEpic,
  fetchSquadsEpic,
  registerUserEpic,
  signinUserEpic,
  signinUserSuccessEpic,
  registerUserSuccessEpic,
  createSquadSuccessEpic,
  MatchEpics.createMatchEpic,
  MatchEpics.createMatchSuccessEpic,
  MatchEpics.createMatchSelectionEpic,
  MatchEpics.createMatchSelectionSuccessEpic,
  MatchEpics.addSelectionEpic,
  PlayerEpics.createPlayerEpic,
  PlayerEpics.fetchPlayersForSquadsEpic
);
