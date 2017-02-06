import UserReducer from './user-reducer';
import * as types from '../actions/actionTypes';

describe('User Reducer', () => {
    it('should return initial state when action empty', () => {
        expect(UserReducer(undefined, {})).toEqual({});
    });

    it('should return initial state when action type not set', () => {
        expect(UserReducer(undefined, {type: undefined })).toEqual({});
    });

    it('should alter state when register user', () => {
        expect(UserReducer(undefined, {type: types.REGISTER_USER})).toEqual({ isLoading: true });
    });
});
