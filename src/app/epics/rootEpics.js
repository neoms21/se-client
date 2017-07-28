import { combineEpics } from 'redux-observable';
import { createSquadEpic, createSquadSuccessEpic, fetchSquadsEpic, deleteSquadEpic } from '../modules/squads/epics/squad-epic';
import {
    registerUserEpic, signinUserEpic, signinUserSuccessEpic, registerUserSuccessEpic,
    verifyTokenSuccessEpic, verifyTokenEpic, verifyTokenFailureEpic
} from '../modules/user/epics/user-epic';
import * as AppEpics from './app-epics';
import * as MatchEpics from '../modules/matches/epics/match-epic';
import * as PlayerEpics from '../modules/players/epics/players-epic';

// combine all epics into one
export const rootEpic = combineEpics(
  AppEpics.signinSuccessEpic,
  createSquadEpic,
  fetchSquadsEpic,
  PlayerEpics.createPlayerEpic,
  PlayerEpics.fetchPlayersEpic,
  PlayerEpics.createPlayerSuccessEpic,
  registerUserEpic,
  signinUserEpic,
  deleteSquadEpic,
  signinUserSuccessEpic,
  registerUserSuccessEpic,
  createSquadSuccessEpic,
  MatchEpics.createMatchEpic,
  MatchEpics.createMatchSuccessEpic,
  MatchEpics.addMatchSelectionEpic,
  MatchEpics.addInfoEpic,
  MatchEpics.editMatchSelectionEpic,
  MatchEpics.saveMatchSelectionEpic,
  verifyTokenEpic,
  verifyTokenSuccessEpic,
  verifyTokenFailureEpic
);
