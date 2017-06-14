import * as types from '../actions/actionTypes';
import convertErrorArrayToObject from '../../../services/utils-service';

const initialState = {};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MATCH:
      return {isLoading: true, ...state, errors: {}};

    case types.CREATE_MATCH_SUCCESS:
      return {...state, isLoading: false, message: action.message, errors: {}};

    case types.CREATE_MATCH_FAILURE:
      const errorDef = convertErrorArrayToObject(action.errors);
      return {...state, isLoading: false, errors: errorDef.fieldErrors, errorMessage: errorDef.generalErrors[0]};

    default:
      return state;
  }
}
