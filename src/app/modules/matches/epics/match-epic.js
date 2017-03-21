import * as ActionTypes from '../actions/actionTypes';
import {sendCommand} from '../../../services/server-service';
import * as matchActions from '../actions/match-actions';
import {push} from 'react-router-redux';

export const createMatchEpic = action$ =>
    action$.ofType(ActionTypes.CREATE_MATCH)
        .mergeMap(action =>
            sendCommand('CreateMatch', action.matchInfo)
                .map(ev => {
                    console.log(ev);
                        return ev.properties.isFailure ? matchActions.createMatchFailure(ev.errors)
                    : matchActions.createMatchSuccess(ev.user); }) // output success
        );

export const createMatchSuccessEpic = action$ =>
    action$.ofType(ActionTypes.CREATE_MATCH_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/createdmatch', action.message)));