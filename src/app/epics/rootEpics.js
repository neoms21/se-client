import {combineEpics} from 'redux-observable';
import {
    registerUserEpic, signinUserEpic, signinUserSuccessEpic, registerUserSuccessEpic,
    verifyTokenSuccessEpic, verifyTokenEpic, verifyTokenFailureEpic
} from '../modules/user/epics/user-epic';
import {
    createPlayerEpic, fetchPlayersEpic, createPlayerSuccessEpic,
    deletePlayerEpic
} from '../modules/players/epics/players-epic';
import {createSquadEpic, deleteSquadEpic} from '../modules/squads/epics/squad-epic';
import {fetchSquadsEpic} from '../modules/squads/epics/squad-epic';
import {createSquadSuccessEpic} from '../modules/squads/epics/squad-epic';
import * as AppEpics from './app-epics';

// combine all epics into one
export const rootEpic = combineEpics(
    AppEpics.signinSuccessEpic,
    createSquadEpic,
    createPlayerEpic,
    fetchPlayersEpic,
    deletePlayerEpic,
    fetchSquadsEpic,
    registerUserEpic,
    deleteSquadEpic,
    signinUserEpic,
    signinUserSuccessEpic,
    registerUserSuccessEpic,
    verifyTokenEpic,
    verifyTokenSuccessEpic,
    verifyTokenFailureEpic,
    createSquadSuccessEpic,
    createPlayerSuccessEpic
);
