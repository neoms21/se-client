import * as types from '../actions/actionTypes';

const initialState = {};

export default function matchSelectionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MATCH:
      return { ...state, selections: [], errors: {}};

    case types.ADD_SELECTION:
      return { ...state, selections: state.selections ? [...state.selections, {...action.matchSelection}] : []};

    case types.DELETE_SELECTION:
      return { ...state, selections: state.selections.filter(sel => sel.selectionId !== action.selectionId)};

    case types.CREATE_MATCH_SELECTION:
      return { isLoading: true, ...state, errors: {}, matchSelection: {} };

    case types.CREATE_MATCH_SELECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        errors: {},
        selections: []
        // matchSelection: {
        //   matchSelectionId: action.matchSelection.matchSelectionId,
        //   playerId: action.matchSelection.playerId,
        //   positionId: action.matchSelection.positionId
        // }
      };

    case types.CREATE_MATCH_SELECTION_FAILURE:
      return { ...state, isLoading: false, errors: action.errors };

    default:
      return state;
  }
}
