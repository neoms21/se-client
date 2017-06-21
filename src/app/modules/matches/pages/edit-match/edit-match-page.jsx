import React from 'react';
import EditMatchForm from './edit-match-form';
import { createMatch } from '../../actions/match-actions';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../validators/validations';
import * as utilsService from '../../../../services/utils-service';
import { fetchPlayers } from '../../../players/actions/players-actions';


function mapStateToProps(state, ownProps) {
  const values = getFormValues('EditMatchForm')(state);

  return {
    errors: state.matches.errors,
    squads: state.squads.squads,
    availablePlayers: state.players.players || [],
    disabled: false
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSave: (values) => {
      dispatch(createMatch (values));
    },
    getAvailablePlayers: (squadId) => {
      dispatch(fetchPlayers(squadId));
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
