import * as types from '../actions/squad.actionTypes';

const initialState = {
    squads: [],
    saved: false
};

export default function squadReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SQUADS:
            return state;
        case types.FETCH_SQUADS_SUCCESS:
            return Object.assign({}, state, {
                squads: action.payload
            });
        case types.FETCH_SQUADS_FAILURE:
            return Object.assign({}, state, {
                errors: action.errors
            });
        case types.CREATE_SQUAD:
            return state;
        case types.CREATE_SQUAD_SUCCESS:
            return Object.assign({}, state, {saved: true});
        default:
            return state;
    }
}