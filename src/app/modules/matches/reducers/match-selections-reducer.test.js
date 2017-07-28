import matchSelectionReducer from './match-selections-reducer';
import * as types from '../actions/actionTypes';

describe('Match Selections Reducer', () => {
  const matchInfo = {
    squad: 'ffba',
    matchDate: new Date('01-jan-2017 16:00:00'),
    opposition: 'Batetrsea Ironsides'
  };

  it('should do nothing', () => {

  });
  it('should return initial state when action empty', () => {
    expect(matchSelectionReducer(undefined, {})).toEqual({});
  });

  it('should return initial state when action type not set', () => {
    expect(matchSelectionReducer(undefined, {type: undefined})).toEqual({});
  });

  it('should alter state when add match selection', () => {
    expect(matchSelectionReducer(undefined, {type: types.ADD_MATCH_SELECTION, payload: {matchInfo: matchInfo, }}))
      .toEqual({ selections: []});
  });

  // it('should alter state when create match success', () => {
  //   let action = {type: types.CREATE_MATCH_SUCCESS, message: 'Match added successfully'};
  //   const expectedState = {isLoading: false, errors: {}, message: 'Match added successfully'};
  //   expect(matchSelectionReducer({isLoading: true, errors: {}}, action)).toEqual(expectedState);
  // });
  //
  // it('should alter state when register Match failure', () => {
  //   let action = {type: types.CREATE_MATCH_FAILURE, errors: [{name: 'Unable to find server'}, 'general failure']};
  //   const expectedState = {
  //     isLoading: false,
  //     errors: [{name: 'Unable to find server'}, 'general failure']
  //   };
  //   expect(matchSelectionReducer({isLoading: true}, action)).toEqual(expectedState);
  // });

});
