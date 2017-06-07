import React from 'react';
import EditMatchForm from './edit-match-form';
import { createMatch } from '../../actions/match-actions';
import { connect } from 'react-redux';
import { ServerService } from '../../../../services/server-service';
import { reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../validations';


function mapStateToProps(state, ownProps) {
  return {
    errors: state.matches.errors ? state.matches.errors.specific: {},
    squads: state.squads.squads,
    disabled: false
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (values) => {
      console.log('saving match');
      dispatch(createMatch(values));
    }
  };
};

const validate = values => {
  return validateRequiredFields(values, ['team', 'matchDate', 'opposition']);
};

let page = reduxForm({
  form: 'EditMatchForm',
  validate
})(EditMatchForm);

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(page);
