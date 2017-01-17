import {UserActions} from './user-actions';
//import {describe, it, expect} from 'mocha';

describe('User actions', () => {
    it('should return object for registerUser', () => {
        const result = actions.registerUser({});

        expect(result.type).toBe(UserActions.REGISTER_USER);
        expect(typeof result.payload).toBe('object');
    });

    it('should return correct object for registerUserSuccess', () => {
        const actions = new UserActions();
        const result = actions.registerUserSuccess(new User(), 'i nailed it');

        expect(result.payload instanceof ApiSuccess).toBeTruthy();
        expect(result.type).toBe(UserActions.REGISTER_USER_SUCCESS);
        expect(result.payload.message).toBe('i nailed it');
    });

    it('should return correct object for registerUserFailure', () => {
        const actions = new UserActions();
        const result = actions.registerUserFailure(501, 'server blew');

        expect(result.type).toBe(UserActions.REGISTER_USER_FAILURE);
        expect(result.payload instanceof ApiFailure).toBeTruthy();
        expect(result.payload.status).toBe(501);
        expect(result.payload.error).toBe('server blew');
    });
});
