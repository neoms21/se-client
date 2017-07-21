import React from 'react';
import { MenuItem, RaisedButton } from 'material-ui';
import './match-edit-selection.scss';
import { Field } from 'redux-form';
import SelectField from '../../../../../components/form/select-field';
import lodash from 'lodash';
import PropTypes from 'prop-types';

export default class MatchEditSelectionForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors && nextProps.errors.length > 0) {
      this.props.dispatch(stopSubmit('MatchEditSelectionForm', nextProps.errors[0]));
    }
  }

  getEditType = () => {
    return lodash.isNil(this.props.matchSelection) ? 'Create' : 'Edit';
  };

  getSaveLabel = () => {
    return lodash.isNil(this.props.matchSelection) ? 'Add' : 'Edit';
  };

  getErrorClasses = () => {
    return (this.props.generalErrors.length > 0 ? 'error' : '');
  };

  onSave = (values) => {
    this.props.onSave(values, this.props.matchInfo.matchId, this.props.matchSelection ?
      this.props.matchSelection.selectionId : null);
  };

  render = () => {
    const {
      availablePlayers,
      positions,
      handleSubmit,
      submitting,
      generalErrors,
      onClose
    } = this.props;

    return (
      <div className="match-edit-selection">
        <h1>{this.getEditType} selection</h1>
        <div className="match-info">
        </div>
        {availablePlayers.length === 0 ?
          <div className="error">There are no players available for that team
          </div> : <span/>
        }

        <form onSubmit={handleSubmit(::this.onSave)}>
          <div className="selection-body">
            <Field component={SelectField} name="player" label="Select player"
                   className="player">
              {availablePlayers.map((avail, index) =>
                <MenuItem key={index}
                          value={avail.playerName}
                          primaryText={avail.playerName}/>
              )}
            </Field>
            <Field component={SelectField} name="position" className="position"
                   label="Starting position">
              {positions.map((position) =>
                <MenuItem key={position.value}
                          value={position.value}
                          primaryText={position.description}/>
              )}
            </Field>
          </div>
          <div className={::this.getErrorClasses()}>
            {generalErrors.map((errorMsg, index) =>
              <span key={index}>{errorMsg}</span>
            )}
          </div>
          <div className="buttons">
            <RaisedButton label={::this.getSaveLabel()} primary={true} type="submit" disabled={submitting}/>
            <RaisedButton label="Close" onTouchTap={onClose}/>
          </div>
        </form>
      </div>
    );
  };
}

// ask for `router` from context
MatchEditSelectionForm.contextTypes = {
  router: PropTypes.object
};
