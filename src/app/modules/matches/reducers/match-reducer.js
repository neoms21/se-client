import * as types from '../actions/actionTypes';
import convertErrorArrayToObject from '../../../services/utils-service';

const initialState = {};

export default function matchReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_MATCH:
            return {isLoading: true, ...state};
        case types.CREATE_MATCH_SUCCESS:
            return {...state, isLoading: false, message: action.message};
        case types.CREATE_MATCH_FAILURE:
            return {...state, isLoading: false, errors: convertErrorArrayToObject(action.errors)};
        default:
            return state;
    }
}
