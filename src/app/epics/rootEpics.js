import {combineEpics} from 'redux-observable';
import {registerUserEpic, signinUserEpic, signinUserSuccessEpic} from '../modules/user/epics/user-epic';

// combine all epics into one
export const rootEpic = combineEpics(
    registerUserEpic,
    signinUserEpic,
    signinUserSuccessEpic
);
