import PlayerReducer from './players.reducer';
import * as types from '../actions/players.actionTypes';

describe('Player Reducer', () => {
    it('should return initial state', () => {
        expect(PlayerReducer(
            undefined, {})).toEqual({
            players: [],
            selectedPlayer: {},
            errors: []
        });
    });

    it('should append the states when fetch players is received', () => {
        const initialState = { players: []};
        expect(PlayerReducer(initialState,
            {type: types.FETCH_PLAYERS_SUCCESS, payload: ['Abcd', 'Defg']}))
            .toEqual({ players: ['Abcd', 'Defg']});
    });


    it('should remove the squad when delete squad action is taken', () => {
        const initialState = {
            players: [{id: '123', name: 's1'},
                {id: '345', name: 's1'}]
        };
        expect(PlayerReducer(initialState,
            {type: types.DELETE_PLAYER_SUCCESS, payload: {id:'123'}}))
            .toEqual({players: [{id: '345', name: 's1'}]});
    });
});
