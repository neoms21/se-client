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
        default:
            return state;
    }
}