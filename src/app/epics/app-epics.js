import * as UserActionTypes from '../modules/user/actions/actionTypes';
import * as SquadActionTypes from '../modules/squads/actions/squad.actionTypes';
import {push} from 'react-router-redux';

export const signinSuccessEpic = action$ => action$.ofType(UserActionTypes.SIGNIN_USER_SUCCESS)
    .mapTo({type: SquadActionTypes.FETCH_SQUADS});