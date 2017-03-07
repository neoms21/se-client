import SquadReducer from './squad-reducer';
import * as types from '../actions/squad.actionTypes';

describe('Squad Reducer', () => {
    it('should return initial state', () => {
        expect(SquadReducer(undefined, {})).toEqual({saved: false, squads: []});
    });

    it('should append the states when fetch squads is sent', () => {
        const initialState = {saved: false, squads: []};
        expect(SquadReducer(initialState,
            {type: types.FETCH_SQUADS, payload: ['Abcd', 'Defg']}))
            .toEqual({saved: false, squads: ['Abcd', 'Defg']});
    });
});
