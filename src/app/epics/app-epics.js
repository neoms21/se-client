import * as ActionTypes from '../actions/actionTypes';
import * as appActions from '../actions/app-actions';
import {push} from 'react-router-redux';

export const navigateListMatches = action$ =>
    action$.ofType(ActionTypes.NAVIGATE_LIST_MATCHES)
        .mergeMap(action =>
            Observable.of(push('/matches/list'))); // change route

export const navigateCreateMatch = action$ =>
    action$.ofType(ActionTypes.NAVIGATE_CREATE_MATCH)
        .mergeMap(action =>
            Observable.of(push('/matches/create'))); // change route
