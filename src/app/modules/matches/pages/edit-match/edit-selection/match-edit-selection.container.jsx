import React from 'react';
import MatchEditSelectionForm from './match-edit-selection-form';
import { addMatchSelection, saveMatchSelection } from '../../../actions/match-actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { validateRequiredFields } from '../../../../../validators/validations';
import { convertErrorArrayToObject } from '../../../../../services/utils-service';
import * as uuid from 'uuid';

const tempPositions = [
  {value: 'defender', description: 'Defender'},
  {value: 'forward', description: 'Forward'},
  {value: 'goalkeeper', description: 'Goalkeeper'},
  {value: 'midfielder', description: 'Midfielder'}
];

function mapStateToProps(state) {
  const errorDef = convertErrorArrayToObject(state.matchSelections.errors);

  return {
    initialValues: state.matchSelections.matchSelection,
    availablePlayers: state.players.players || [],
    positions: tempPositions, //state.matchSelections.positions || [],
    matchInfo: state.matches.selectedMatch,
    matchSelection: state.matchSelections.matchSelection,
    errors: errorDef.fieldErrors,
    generalErrors: errorDef.generalErrors
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSave: (values, matchId, selectionId) => {
      selectionId ? dispatch(saveMatchSelection({...values, matchId}))
        : dispatch(addMatchSelection({...values, selectionId: uuid.v4(), matchId}));
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
