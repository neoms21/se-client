import UserReducer from './user-reducer';
import * as types from '../actions/actionTypes';

describe('User Reducer', () => {
    it('should return initial state when action empty', () => {
        expect(UserReducer(undefined, {})).toEqual({});
    });

    it('should return initial state when action type not set', () => {
        expect(UserReducer(undefined, {type: undefined})).toEqual({});
    });

    it('should alter state when register user', () => {
        expect(UserReducer(undefined, {type: types.REGISTER_USER})).toEqual({isLoading: true});
    });

    it('should alter state when register user success', () => {
        let action = {type: types.REGISTER_USER_SUCCESS, message: 'Frank Lampard added successfully'};
        const expectedState = {isLoading: false, message: 'Frank Lampard added successfully'};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when register user failure', () => {
        let action = {type: types.REGISTER_USER_FAILURE, errors: {name: 'Unable to find new club'}};
        const expectedState = {isLoading: false, errors: {name: 'Unable to find new club'}};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when signing in user', () => {
        expect(UserReducer(undefined, {type: types.SIGNIN_USER})).toEqual({isLoading: true});
    });

    it('should alter state when register user success', () => {
        let action = {type: types.SIGNIN_USER_SUCCESS, user: {name: 'Frank Lampard', email: 'frank@chelseafc.com'}};
        const expectedState = {isLoading: false, currentUser: {name: 'Frank Lampard', email: 'frank@chelseafc.com'}};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when register user failure', () => {
        let action = {type: types.SIGNIN_USER_FAILURE, error: 'Unable to find new club'};
        const expectedState = {isLoading: false, error: 'Unable to find new club'};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });
});
