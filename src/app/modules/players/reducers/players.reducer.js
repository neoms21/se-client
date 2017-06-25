import * as types from '../actions/players.actionTypes';

const initialState = {
    players: [],
    selectedPlayer: {},
    errors: []
};

export default function playersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                players: action.payload
            });
        case types.SET_SELECTED_PLAYER:
            return Object.assign({}, state, {
                selectedPlayer: action.payload
            });
        case types.CLEAR_SELECTED_PLAYER:
            return Object.assign({}, state, {
                selectedPlayer: {}
            });
        case types.CREATE_PLAYER_FAILURE:
            return Object.assign({}, state, {
                errors: action.errors
            });
        default:
            return state;
    }
}