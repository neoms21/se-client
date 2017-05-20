import * as formActions from './action-types';

export function update(name, value) {
  return dispatch => dispatch({
    type: formActions.FORM_UPDATE_VALUE,
    name, value
  });
}

export function reset.jsx() {
  return dispatch => dispatch({
    type: formActions.FORM_RESET
  });
}
