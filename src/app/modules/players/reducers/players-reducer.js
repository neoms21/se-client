import * as types from '../actions/players.actionTypes';
import {convertErrorArrayToObject} from '../../../services/utils-service';

const initialState = {};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PLAYERS:
      return {isLoading: true, ...state, errors: {}};

    case types.FETCH_PLAYERS_SUCCESS:
      return {...state, isLoading: false, players: action.payload, errors: {}};

    case types.FETCH_PLAYERS_FAILURE:
      const errorDef = convertErrorArrayToObject(action.errors);
      return {...state, isLoading: false, errors: errorDef.fieldErrors, errorMessage: errorDef.generalErrors[0]};

    default:
      return state;
  }
}
