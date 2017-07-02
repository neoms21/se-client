import * as types from '../actions/actionTypes';

const initialState = {};

export default function matchSelectionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MATCH_SELECTION:
      return {isLoading: true, ...state, errors: {}, matchSelection: {}};

    case types.CREATE_MATCH_SELECTION_SUCCESS:
      return {
        ...state, isLoading: false, message: action.message, errors: {},
        matchSelection: {
          matchSelectionId: action.matchSelection.matchSelectionId,
          playerId: action.matchSelection.playerId,
          positionId: action.matchSelection.positionId
        }
      };

    case types.CREATE_MATCH_SELECTION_FAILURE:
      return {...state, isLoading: false, errors: action.errors};

    default:
      return state;
  }
}
