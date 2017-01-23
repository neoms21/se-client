import UserReducer from './user-reducer';
import * as types from '../actions/actionTypes';

describe('User Reducer', () => {
    it('should return initial state', () => {
        expect(UserReducer(undefined, {})).toEqual({});
    });

    it('should alter state when register user', () => {
        expect(UserReducer(undefined, {type: types.REGISTER_USER})).toEqual({ isLoading: true });
    });
});
