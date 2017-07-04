import * as types from '../actions/actionTypes';

const initialState = {};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MATCH:
      return {isLoading: true, ...state, errors: {}, selectedMatch: {}};

    case types.CREATE_MATCH_SUCCESS:
      return {
        ...state, isLoading: false, message: action.message, errors: {},
        selectedMatch: {
          matchId: action.match.matchId,
          squadName: action.match.squadName,
          matchDate: action.match.matchDate
        }
      };

    case types.CREATE_MATCH_FAILURE:
      return {...state, isLoading: false, errors: action.errors};

    default:
      return state;
  }
}
