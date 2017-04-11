import * as types from '../actions/actionTypes';
import convertErrorArrayToObject from '../../../services/utils-service';

const initialState = {};

export default function teamsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_TEAMS:
            return {isLoading: true, ...state};
        case types.FETCH_TEAMS_SUCCESS:
            return {...state, isLoading: false, teams: action.teams};
        case types.CREATE_MATCH_FAILURE:
            return {...state, isLoading: false, errors: convertErrorArrayToObject(action.errors)};
        default:
            return state;
    }
}
