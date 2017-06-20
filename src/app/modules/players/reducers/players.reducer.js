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
        default:
            return state;
    }
}