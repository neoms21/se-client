import UserReducer from './user-reducer';
import * as types from '../actions/actionTypes';

describe('User Reducer', () => {
    it('should return initial state when action empty', () => {
        expect(UserReducer(undefined, {})).toEqual({"currentUser": {}});
    });

    it('should return initial state when action type not set', () => {
        expect(UserReducer(undefined, {type: undefined})).toEqual({"currentUser": {}});
    });

    it('should alter state when register user', () => {
        expect(UserReducer(undefined, {type: types.REGISTER_USER})).toEqual({isLoading: true, "currentUser": {}});
    });

    it('should alter state when register user success', () => {
        let action = {type: types.REGISTER_USER_SUCCESS, message: 'Frank Lampard added successfully'};
        const expectedState = {isLoading: false, message: 'Frank Lampard added successfully'};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when register user failure', () => {
        // console.log('int ests');
        // let action = {type: types.REGISTER_USER_FAILURE, errors: [{name: 'Unable to find new club'}]};
        // const expectedState = {isLoading: false, errors: {general: [], specific: { name: 'Unable to find new club'}}};
        // console.log(UserReducer({isLoading: true}, action));
        // expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when signing in user', () => {
        expect(UserReducer(undefined, {type: types.SIGNIN_USER})).toEqual({isLoading: true});
    });

    it('should alter state when register user success', () => {
        let action = {type: types.SIGNIN_USER_SUCCESS, user: {name: 'Frank Lampard', email: 'frank@chelseafc.com'}};
        const expectedState = {
            isLoading: false,
            currentUser: {name: 'Frank Lampard', email: 'frank@chelseafc.com'},
            userHash: {}
        };
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });

    it('should alter state when register user failure', () => {
        let action = {type: types.SIGNIN_USER_FAILURE, error: 'Unable to find new club'};
        const expectedState = {isLoading: false, errorMessage: 'Unable to find new club', showError: true};
        expect(UserReducer({isLoading: true}, action)).toEqual(expectedState);
    });
});
