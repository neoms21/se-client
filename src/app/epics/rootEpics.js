import { combineEpics } from 'redux-observable';
import {
  registerUserEpic,
  registerUserSuccessEpic,
  signinUserEpic,
  signinUserSuccessEpic
} from '../modules/user/epics/user-epic';
import { createSquadEpic, createSquadSuccessEpic, fetchSquadsEpic } from '../modules/squads/epics/squad-epic';
import {combineEpics} from 'redux-observable';
import {
    registerUserEpic, signinUserEpic, signinUserSuccessEpic, registerUserSuccessEpic,
    verifyTokenSuccessEpic, verifyTokenEpic, verifyTokenFailureEpic
} from '../modules/user/epics/user-epic';
import {createPlayerEpic, fetchPlayersEpic, createPlayerSuccessEpic} from '../modules/players/epics/players-epic';
import {createSquadEpic, deleteSquadEpic} from '../modules/squads/epics/squad-epic';
import {fetchSquadsEpic} from '../modules/squads/epics/squad-epic';
import {createSquadSuccessEpic} from '../modules/squads/epics/squad-epic';
import * as AppEpics from './app-epics';
import * as MatchEpics from '../modules/matches/epics/match-epic';
import * as PlayerEpics from '../modules/players/epics/player-epic';

// combine all epics into one
export const rootEpic = combineEpics(
  AppEpics.signinSuccessEpic,
  createSquadEpic,
  fetchSquadsEpic,
  createPlayerEpic,
  fetchPlayersEpic,
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
