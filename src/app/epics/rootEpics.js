import { combineEpics } from 'redux-observable';
import {
  registerUserEpic,
  registerUserSuccessEpic,
  signinUserEpic,
  signinUserSuccessEpic
} from '../modules/user/epics/user-epic';
import { createPlayerEpic } from '../modules/players/epics/player-epic';
import { createSquadEpic, createSquadSuccessEpic, fetchSquadsEpic } from '../modules/squads/epics/squad-epic';
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
  PlayerEpics.createPlayerEpic,
  PlayerEpics.fetchPlayersForSquadsEpic
);
