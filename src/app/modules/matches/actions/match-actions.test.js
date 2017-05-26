import * as MatchActions from './match-actions';
import * as ActionTypes from './actionTypes';

describe('Match actions', () => {
    describe('Create match', () => {
        it('should return object for createMatch', () => {
            const result = MatchActions.createMatch({});

            expect(result.type).toBe(ActionTypes.CREATE_MATCH);
            expect(typeof result.matchInfo).toBe('object');
        });

        it('should return payload for createMatch', () => {
            const result = MatchActions.createMatch({opponents: 'Battersea', when: '12-jan-2017'});

            expect(result.type).toBe(ActionTypes.CREATE_MATCH);
            expect(result.matchInfo.opponents).toBe('Battersea');
            expect(result.matchInfo.when).toBe('12-jan-2017');
        });

        it('should return correct object for Success', () => {
            const result = MatchActions.createMatchSuccess({id: 123, team: '1st', when: '12-jan-2017'});

            expect(result.type).toBe(ActionTypes.CREATE_MATCH_SUCCESS);
            expect(result.match.id).toBe(123);
            expect(result.match.team).toBe('1st');
            expect(result.match.when).toBe('12-jan-2017');
        });

        it('should return correct object for registerUserFailure', () => {
            const result = MatchActions.createMatchFailure(['error with server', 'invalid team']);

            expect(result.type).toBe(ActionTypes.CREATE_MATCH_FAILURE);
            expect(result.errors).toBeDefined();
            expect(result.errors[0]).toBe('error with server');
            expect(result.errors[1]).toBe('invalid team');
        });
    });

    describe('Fetch teams', () => {
        it('should return object for createFetch', () => {
            const result = MatchActions.createFetchTeams();

            expect(result.type).toBe(ActionTypes.FETCH_TEAMS);
        });

        it('should return payload for createFetch', () => {
            const result = MatchActions.createMatch({opponents: 'Battersea', when: '12-jan-2017'});

            expect(result.type).toBe(ActionTypes.CREATE_MATCH);
            expect(result.matchInfo.opponents).toBe('Battersea');
            expect(result.matchInfo.when).toBe('12-jan-2017');
        });

        it('should return correct object for Success', () => {
            const result = MatchActions.createMatchSuccess({id: 123, team: '1st', when: '12-jan-2017'});

            expect(result.type).toBe(ActionTypes.CREATE_MATCH_SUCCESS);
            expect(result.match.id).toBe(123);
            expect(result.match.team).toBe('1st');
            expect(result.match.when).toBe('12-jan-2017');
        });

        it('should return correct object for registerUserFailure', () => {
            const result = MatchActions.createMatchFailure(['error with server', 'invalid team']);

            expect(result.type).toBe(ActionTypes.CREATE_MATCH_FAILURE);
            expect(result.errors).toBeDefined();
            expect(result.errors[0]).toBe('error with server');
            expect(result.errors[1]).toBe('invalid team');
        });
    });

});
