import React from 'react';
import MatchEditSelectionForm from './match-edit-selection-form';
import { createMatchSelection } from '../../../actions/match-actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../../validators/validations';
import { convertErrorArrayToObject } from '../../../../../services/utils-service';
import { goBack } from 'react-router-redux';

function mapStateToProps(state, ownProps) {
  const errorDef = convertErrorArrayToObject(state.matchSelections.errors);

  return {
    availablePlayers: state.players.players || [],
    positions: state.players.positions || [],
    selectedMatch: state.matches.selectedMatch,
    errors: errorDef.fieldErrors,
    generalErrors: errorDef.generalErrors
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSave: (values) => {
      dispatch(createMatchSelection(values));
      push('')
    },
    onClose: () => {
      goBack();
    }
  };
};

const validate = values => {
  return validateRequiredFields(values, ['player', 'position']);
};

let page = reduxForm({
  form: 'MatchEditSelectionForm',
  validate
})(MatchEditSelectionForm);

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(page);
