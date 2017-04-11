import teamsReducer from './teams-reducer';
import * as types from '../actions/actionTypes';

describe('Teams Reducer', () => {
    it('should do nothing', () => {

    });
    it('should return initial state when action empty', () => {
        expect(teamsReducer(undefined, {})).toEqual({});
    });

    it('should return initial state when action type not set', () => {
        expect(teamsReducer(undefined, {type: undefined})).toEqual({});
    });

    it('should alter state when fetching teams', () => {
        expect(teamsReducer(undefined, {type: types.FETCH_TEAMS})).toEqual({isLoading: true});
    });

    it('should alter state when success', () => {
        let action = {type: types.FETCH_TEAMS_SUCCESS, teams: [{name: 'Chelsea'}]};
        const expectedState = {isLoading: false, teams: [{name: 'Chelsea'}]};
        expect(teamsReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when failure', () => {
        let action = {type: types.FETCH_TEAMS_FAILURE, errors: [{name: 'Unable to find server'}, 'general failure']};
        const expectedState = {
            isLoading: false,
            errors: {general: ['general failure'], specific: {name: 'Unable to find server'}}
        };
        expect(teamsReducer({isLoading: true}, action)).toEqual(expectedState);
    });


});
