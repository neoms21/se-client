import * as types from './action-types';

export const changeLocation = (location) => ({
  type: types.LOCATION_CHANGE,
  payload: {
    pathname: location,
    search: '',
    hash: ''
  }
});
