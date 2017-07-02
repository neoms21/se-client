import * as types from '../actions/actionTypes';

const initialState = {
  positions: [
    {
      value: "defender",
      description: "Defender"
  },
    { value: 'forward', description: 'Forward' },
    { value: 'goalkeeper', description: 'Goalkeeper' },
    {
      value: 'midfielder',
      description: "Midfielder"
  }
]
};

export default function matchSelectionsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MATCH_SELECTION:
      return { isLoading: true, ...state, errors: {}, matchSelection: {} };

    case types.CREATE_MATCH_SELECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        errors: {},
        matchSelection: {
          matchSelectionId: action.matchSelection.matchSelectionId,
          playerId: action.matchSelection.playerId,
          positionId: action.matchSelection.positionId
        }
      };

    case types.CREATE_MATCH_SELECTION_FAILURE:
      return { ...state, isLoading: false, errors: action.errors };

    default:
      return state;
  }
}
