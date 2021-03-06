import * as types from './actionTypes';

export const registerUser = (userInfo) => ({
    type: types.REGISTER_USER,
    user: userInfo
});

export const registerUserSuccess = (user) => ({
    type: types.REGISTER_USER_SUCCESS,
    user: user
});

export const registerUserFailure = (errors) => ({
    type: types.REGISTER_USER_FAILURE,
    errors: errors
});

export const signinUser = (userInfo) => ({
    type: types.SIGNIN_USER,
    user: userInfo
});

export const signinUserSuccess = (user) => ({
    type: types.SIGNIN_USER_SUCCESS,
    user: user
});

export const signinUserFailure = (error) => ({
    type: types.SIGNIN_USER_FAILURE,
    error: error
});

export const verifyToken = (token) => ({
    type: types.VERIFY_TOKEN,
    payload: token
});

export const verifyTokenSuccess = () => ({
    type: types.VERIFY_TOKEN_SUCCESS
});

export const verifyTokenFailure = (error) => ({
    type: types.VERIFY_TOKEN_FAILURE,
    error: error
});
export const signOutUser = () => ({
    type: types.SIGNOUT_USER
})
