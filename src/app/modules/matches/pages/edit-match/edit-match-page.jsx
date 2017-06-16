import React from 'react';
import EditMatchForm from './edit-match-form';
import { createMatch } from '../../actions/match-actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../validators/validations';
import * as utilsService from '../../../../services/utils-service';

function mapStateToProps(state, ownProps) {
  return {
    errors: state.matches.errors,
    squads: state.squads.squads,
    disabled: false
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (values) => {
      dispatch(createMatch(values));
    }
  };
};

const validate = values => {
  let error = validateRequiredFields(values, ['squad', 'matchDate', 'opposition']);

  if(!utilsService.isNil(values) && !utilsService.isNil(values.playerPositions)) {
    error.playerPositions = [];
    // check values in array
    values.playerPositions.map((item, index) => {
      error.playerPositions[index] = {};

      if (utilsService.isNil(item.Position)) {
        error.playerPositions[index].Position = 'Position is required';
      }
      if (utilsService.isNil(item.Player)) {
        error.playerPositions[index].Player = 'Player is required';
      }
    });
  }

  return error;
};

let page = reduxForm({
  form: 'EditMatchForm',
  validate
})(EditMatchForm);

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(page);
