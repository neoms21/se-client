import * as AppActions from './app-actions';
import * as ActionTypes from './actionTypes';

describe('App actions', () => {
    describe('Navigate list matches', () => {
        it('should have correct type', () => {
            const result = AppActions.navigateCreateMatch();

            expect(result.type).toBe(ActionTypes.NAVIGATE_CREATE_MATCH);
        });
    });

    describe('Navigate create match', () => {
        it('should have correct type', () => {
            const result = AppActions.navigateCreateMatch();

            expect(result.type).toBe(ActionTypes.NAVIGATE_CREATE_MATCH);
        });

    });
});
