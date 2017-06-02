import {combineEpics} from 'redux-observable';
import {registerUserEpic, signinUserEpic, signinUserSuccessEpic, registerUserSuccessEpic} from '../modules/user/epics/user-epic';
import {createPlayerEpic} from '../modules/players/epics/player-epic';
import {createSquadEpic} from '../modules/squads/epics/squad-epic';
import {fetchSquadsEpic} from '../modules/squads/epics/squad-epic';
import {createSquadSuccessEpic} from '../modules/squads/epics/squad-epic';
import * as AppEpics from './app-epics';

// combine all epics into one
export const rootEpic = combineEpics(
    AppEpics.signinSuccessEpic,
    createSquadEpic,
    createPlayerEpic,
    fetchSquadsEpic,
    registerUserEpic,
    signinUserEpic,
    signinUserSuccessEpic,
    registerUserSuccessEpic,
    createSquadSuccessEpic
);
