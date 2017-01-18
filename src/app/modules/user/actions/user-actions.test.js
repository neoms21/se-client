import * as UserActions from './user-actions';
import * as ActionTypes from './actionTypes';


describe('User actions', () => {
    it('should return object for registerUser', () => {
        const result = UserActions.registerUser({});

        expect(result.type).toBe(ActionTypes.REGISTER_USER);
        expect(typeof result.user).toBe('object');
    });

    it('should return payload for registerUser', () => {
        const result = UserActions.registerUser({ name: 'Paula' , email: 'paula@smith.com'});

        expect(result.type).toBe(ActionTypes.REGISTER_USER);
        expect(result.user.name).toBe('Paula');
        expect(result.user.email).toBe('paula@smith.com');
    });

    it('should return correct object for registerUserSuccess', () => {
        const result = UserActions.registerUserSuccess({ name: 'Paula Smith', email: 'paula@smith.com', role: 'admin'});

        expect(result.type).toBe(ActionTypes.REGISTER_USER_SUCCESS);
        expect(result.user.name).toBe('Paula Smith');
        expect(result.user.email).toBe('paula@smith.com');
        expect(result.user.role).toBe('admin');
    });

    it('should return correct object for registerUserFailure', () => {
        const result = UserActions.registerUserFailure(['error with server']);

        expect(result.type).toBe(ActionTypes.REGISTER_USER_FAILURE);
        expect(result.errors).toBeDefined();
        expect(result.errors[0]).toBe('error with server');
    });
});
