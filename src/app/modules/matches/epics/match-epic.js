import * as ActionTypes from '../actions/actionTypes';
import {sendCommand, sendQuery} from '../../../services/server-service';
import * as matchActions from '../actions/match-actions';
import {push} from 'react-router-redux';

export const createMatchEpic = action$ =>
    action$.ofType(ActionTypes.CREATE_MATCH)
        .mergeMap(action =>
            sendCommand('CreateMatch', action.matchInfo)
                .map(ev => {
                    return ev.properties.isFailure ? matchActions.createMatchFailure(ev.errors)
                        : matchActions.createMatchSuccess(ev.user);
                }) // output success
        );

export const createMatchSuccessEpic = action$ =>
    action$.ofType(ActionTypes.CREATE_MATCH_SUCCESS)
        .mergeMap(action =>
            Observable.of(push('/match-list', action.message)));

export const fetchTeamsEpic = action$ =>
    action$.ofType(LOCATION_CHANGE)
        .mergeMap(action => {


        });

export const getTeamsEpic = action$ =>
    action$.ofType(ActionTypes.FETCH_TEAMS)
        .mergeMap(action =>
            sendQuery('FetchTeams', {})
                .map(ev => {
                    return ev.properties.isFailure ? matchActions.createFetchTeamsFailure(ev.errors)
                        : matchActions.createFetchTeamsSuccess(ev.teams);
                }) // output success
        );

export const getPlayersEpic = action$ =>
    action$.ofType(ActionTypes.FETCH_PLAYERS)
        .mergeMap(action =>
            sendQuery('FetchPlayers', {})
                .map(ev => {
                    return ev.properties.isFailure ? matchActions.createFetchTeamsFailure(ev.errors)
                        : matchActions.createFetchTeamsSuccess(ev.teams);
                }) // output success
        );
