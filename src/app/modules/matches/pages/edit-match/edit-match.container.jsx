import React from 'react';
import EditMatchForm from './edit-match-form';
import { createMatch } from '../../actions/match-actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../validators/validations';
import { convertErrorArrayToObject } from '../../../../services/utils-service';
import { fetchPlayers } from '../../../players/actions/players-actions';


function mapStateToProps(state, ownProps) {
  const errorDef = convertErrorArrayToObject(state.matches.errors);

  return {
    errors: errorDef.fieldErrors,
    generalErrors: errorDef.generalErrors,
    squads: state.squads.squads,
    availablePlayers: state.players.players || [],
    disabled: false
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSave: (values) => {
      dispatch(createMatch(values));
    },
    getAvailablePlayers: (squadId) => {
      dispatch(fetchPlayers(squadId));
    }
  };
};

const validate = values => {
  let error = validateRequiredFields(values, ['squad', 'matchDate', 'opposition']);

  return error;
};

let page = reduxForm({
  form: 'EditMatchForm',
  validate
})(EditMatchForm);

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(page);
