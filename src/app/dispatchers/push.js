import { dispatch } from 'redux';
import * as types from '../actions/location-actions';

const push = (location, store) => {
  store.dispatch({
    type: types.LOCATION_CHANGE,
    payload: location
  })
}

export default push;
