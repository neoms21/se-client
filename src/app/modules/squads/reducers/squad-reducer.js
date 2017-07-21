import * as types from '../actions/squad.actionTypes';

const initialState = {
    squads: [],
    saved: false,
    errors: []
};

export default function squadReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SQUADS:
            return Object.assign({}, state, {saved: false});
        case types.FETCH_SQUADS_SUCCESS:
            return Object.assign({}, state, {
                squads: action.payload
            });
        case types.CREATE_SQUAD_FAILURE:
            return Object.assign({}, state, {
                errors: action.errors, saved: false
            });
        case types.CREATE_SQUAD:
            return Object.assign({}, state, {saved: false});
        case types.CREATE_SQUAD_SUCCESS:
            return Object.assign({}, state, {saved: true, errors: []});
        case types.DELETE_SQUAD:
            return Object.assign({}, state, {
                squads: state.squads.filter(s => {
                    return s._id !== action.payload
                })
            });
        default:
            return state;
    }
}