import SquadReducer from './squad-reducer';
import * as types from '../actions/squad.actionTypes';

describe('Squad Reducer', () => {
    it('should return initial state', () => {
        expect(SquadReducer(undefined, {})).toEqual({errors: [], saved: false, squads: []});
    });

    it('should append the states when fetch squads is sent', () => {
        const initialState = {saved: false, squads: []};
        expect(SquadReducer(initialState,
            {type: types.FETCH_SQUADS_SUCCESS, payload: ['Abcd', 'Defg']}))
            .toEqual({saved: false, squads: ['Abcd', 'Defg']});
    });


    it('should remove the squad when delete squad action is taken', () => {
        const initialState = {saved: false, squads: [{_id: '123', name: 's1'}, {_id: '345', name: 's1'}]};
        expect(SquadReducer(initialState,
            {type: types.DELETE_SQUAD_SUCCESS, payload: '123'}))
            .toEqual({saved: false, squads: [{_id: '345', name: 's1'}]});
    });
});
