import {combineEpics} from 'redux-observable';
import {registerUserEpic} from '../modules/user/epics/user-epic';
import {createSquadEpic} from '../modules/squads/epics/squad-epic';
import {pingEpic} from './app-epics';

// combine all epics into one
export const rootEpic = combineEpics(
    createSquadEpic,
    registerUserEpic,
    pingEpic
);
