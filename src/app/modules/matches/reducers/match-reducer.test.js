import matchReducer from './match-reducer';
import * as types from '../actions/actionTypes';

describe('Match Reducer', () => {
  it('should do nothing', () => {

  });
  it('should return initial state when action empty', () => {
    expect(matchReducer(undefined, {})).toEqual({});
  });

  it('should return initial state when action type not set', () => {
    expect(matchReducer(undefined, {type: undefined})).toEqual({});
  });

  it('should alter state when create match', () => {
    expect(matchReducer(undefined, {type: types.CREATE_MATCH})).toEqual({isLoading: true, errors: {}});
  });

  it('should alter state when create match success', () => {
    let action = {type: types.CREATE_MATCH_SUCCESS, message: 'Match added successfully'};
    const expectedState = {isLoading: false, errors: {}, message: 'Match added successfully'};
    expect(matchReducer({isLoading: true, errors: {}}, action)).toEqual(expectedState);
  });

  it('should alter state when register Match failure', () => {
    let action = {type: types.CREATE_MATCH_FAILURE, errors: [{name: 'Unable to find server'}, 'general failure']};
    const expectedState = {
      isLoading: false,
      errors: {name: 'Unable to find server'},
      errorMessage: 'general failure'
    };
    expect(matchReducer({isLoading: true}, action)).toEqual(expectedState);
  });

});
