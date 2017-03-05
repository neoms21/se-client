import * as types from '../actions/actionTypes';
import {convertError} from '../../../services/utils-service';

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return {isLoading: true, ...state};
        case types.REGISTER_USER_SUCCESS:
            return {...state, isLoading: false, message: action.message};
        case types.REGISTER_USER_FAILURE:
            return {...state, isLoading: false, errors: convertError(action.errors)};
        case types.SIGNIN_USER:
            let stateCopy = {...state};
            delete stateCopy.error;
            delete stateCopy.currentUser;
            return {isLoading: true, ...stateCopy};
        case types.SIGNIN_USER_SUCCESS:
            return {...state, isLoading: false, ...{currentUser: action.user}};
        case types.SIGNIN_USER_FAILURE:
            return {...state, isLoading: false, error: action.error};
        default:
            return state;
    }
}
