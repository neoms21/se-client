import * as UserActions from './user-actions';
import * as ActionTypes from './actionTypes';

describe('User actions', () => {
    describe('Register user', () => {
        it('should return object for registerUser', () => {
            const result = UserActions.registerUser({});

            expect(result.type).toBe(ActionTypes.REGISTER_USER);
            expect(typeof result.user).toBe('object');
        });

        it('should return payload for registerUser', () => {
            const result = UserActions.registerUser({name: 'Paula', email: 'paula@smith.com'});

            expect(result.type).toBe(ActionTypes.REGISTER_USER);
            expect(result.user.name).toBe('Paula');
            expect(result.user.email).toBe('paula@smith.com');
        });

        it('should return correct object for registerUserSuccess', () => {
            const result = UserActions.registerUserSuccess({
                name: 'Paula Smith',
                email: 'paula@smith.com',
                role: 'admin'
            });

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

    describe('Signin user', () => {
        it('should return object for signin user', () => {
            const result = UserActions.signinUser({});

            expect(result.type).toBe(ActionTypes.SIGNIN_USER);
            expect(typeof result.user).toBe('object');
        });

        it('should return payload for signinUser', () => {
            const result = UserActions.signinUser({userName: 'Paula@hh.com', password: 'blah001'});

            expect(result.type).toBe(ActionTypes.SIGNIN_USER);
            expect(result.user.userName).toBe('Paula@hh.com');
            expect(result.user.password).toBe('blah001');
        });

        it('should return correct object for registerUserSuccess', () => {
            const result = UserActions.signinUserSuccess({
                userName: 'paula@smith.com',
                password: 'admin'
            });

            expect(result.type).toBe(ActionTypes.SIGNIN_USER_SUCCESS);
            expect(result.user.userName).toBe('paula@smith.com');
            expect(result.user.password).toBe('admin');
        });

        it('should return correct object for registerUserFailure', () => {
            const result = UserActions.signinUserFailure(['error with server']);

            expect(result.type).toBe(ActionTypes.SIGNIN_USER_FAILURE);
            expect(result.errors).toBeDefined();
            expect(result.errors[0]).toBe('error with server');
        });
    });
});
