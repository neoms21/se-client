import * as types from '../actions/actionTypes';

const initialState = {
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return { isLoading: true, ...state};
        case types.REGISTER_USER_SUCCESS:
            return { ...state, isLoading: false, message: action.message };
        case types.REGISTER_USER_FAILURE:
            return { ...state, isLoading: false, errors: action.errors};
        case types.SIGNIN_USER:
            return { isLoading: true, ...state};
        case types.SIGNIN_USER_SUCCESS:
            return { ...state, isLoading: false, ...{currentUser: action.user}};
        case types.SIGNIN_USER_FAILURE:
            return { ...state, isLoading: false, error: action.error};
        default:
            return state;
    }
}
