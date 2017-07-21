import * as types from '../actions/actionTypes';

const initialState = {};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_MATCH_INFO:
      return { ...state, selectedMatch: action.info, errors: {}};

    case types.CREATE_MATCH:
      return {isLoading: true, ...state, errors: {}};

    case types.CREATE_MATCH_SUCCESS:
      return {
        ...state, isLoading: false, message: action.message, errors: {}
      };

    case types.CREATE_MATCH_FAILURE:
      return {...state, isLoading: false, errors: action.errors};

    default:
      return state;
  }
}
