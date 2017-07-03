import * as types from '../actions/actionTypes';
import convertErrorArrayToObject from '../../../services/utils-service';

const initialState = {currentUser: {}};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return {isLoading: true, ...state};
        case types.REGISTER_USER_SUCCESS:
            return {...state, isLoading: false, message: action.message};
        case types.REGISTER_USER_FAILURE:

            return {...state, isLoading: false, errors: convertErrorArrayToObject(action.errors)};
        case types.SIGNIN_USER:
            let stateCopy = {...state};
            delete stateCopy.error;
            delete stateCopy.currentUser;

            return {
                isLoading: true, ...stateCopy, userHash: action.user
            };
        case types.SIGNIN_USER_SUCCESS:
            console.log(action.user);
            return {...state, isLoading: false, userHash: {}, ...{currentUser: action.user}};
        case types.SIGNIN_USER_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errorMessage: action.error,
                showError: true
            });
        default:
            return state;
    }
}
