import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, MenuItem, RaisedButton } from 'material-ui';
import './edit-match.scss';
import { Field, stopSubmit } from 'redux-form';
import { SelectField, TextField } from '../../../../components/form';

class EditMatchForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors && nextProps.errors.length > 0) {
      this.props.dispatch(stopSubmit('EditMatchForm', nextProps.errors[0]));
    }
  }

  getErrorClasses = () => {
    let classes = 'submission-errors ';
    return classes + (this.props.generalErrors.length > 0 ? 'visible' : 'hidden');
  };

  // addPlayer = (e) => {
  //   const newPlayer = {
  //     id: this.state.nextId,
  //     position: '',
  //     player: '',
  //     isEditing: true
  //   };
  //   let copyValues = this.state.playersPositions.concat();
  //   copyValues.push(newPlayer);
  //
  //   // now change it
  //   this.setState({
  //     nextId: this.state.nextId + 1,
  //     playersPositions: copyValues
  //   });
  // };

  // deletePlayer = (playerId) => {
  //   let copyValues = {
  //     ...this.state.playersPositions
  //   };
  //
  //   const playerIndexToBeDeleted = copyOfValues.players.findIndex((copyPlayer) => copyPlayer.id === playerId);
  //   if (playerIndexToBeDeleted > -1) {
  //     copyOfPlayers.splice(playerIndexToBeDeleted, 1);
  //   }
  //   // now we have trimmed it, update the state
  //   this.setState({playersPositions: copyValues});
  // };

  // getAvailablePlayers = (availablePlayers, fields) => {
  //   let players = availablePlayers.filter(player => {
  //     return fields.filter(field => {
  //       return field.player === player.playerName;
  //     });
  //   });
  //
  //   return players;
  // };

  // isAddDisabled = (fields) => {
  //   if (!fields) return true;
  //   // are there any fields that are editing
  //   const fieldsEditing = fields.getAll().filter(field => field.isEditing);
  //   return fieldsEditing.length > 0;
  // };
  //
  // renderSquadSelect = (props) => (
  //   <SelectField
  //     floatingLabelText={props.label}
  //     errorText={props.meta.touched && props.meta.error}
  //     {...props.input}
  //     onChange={(event, index, value) => {
  //       props.input.onChange(value);
  //       return this.props.getAvailablePlayers(value);
  //     }}
  //     onBlur={() => {
  //       touched = true;
  //     }}
  //     children={props.children}
  //     {...props.custom}/>
  // );

  renderDatePicker = ({input, label, meta: {touched, error}, ...custom}) =>
    (
      <DatePicker errorText={touched && error} hintText={label} floatingLabelText={label} autoOk={true}
                  onChange={(event, value) =>
                    input.onChange(value)} {...custom} />
    );

  render = () => {
    const {
      onSave,
      squads,
      submitting,
      generalErrors
    } = this.props;

    return (
      <section className="edit-match">
        <h1>Create match</h1>
        <form className="edit-match-form" onSubmit={this.props.handleSubmit(onSave)}>
          <div className="top-section">
            <Field component={SelectField} name="squad" label="Select team"
                   onValueChange={(value) => this.props.getAvailablePlayers(value)}>
              {squads.map(squad =>
                <MenuItem key={squad._id} value={squad._id} primaryText={squad.name}/>)
              }
            </Field>
            <Field component={::this.renderDatePicker} name="matchDate" label="Match date"
                   format={v => (v === '' || v === undefined ? new Date() : new Date(v))}/>
            <Field component={TextField} name="opposition" label="Opponents name"/>
          </div>

          <div className={::this.getErrorClasses()}>
            {generalErrors.map((errorMsg, index) =>
              <span key={index}>{errorMsg}</span>
            )}
          </div>
          <div className="button-row">
            <RaisedButton label="Save" primary={true} type="submit" disabled={submitting}/>
          </div>
        </form>
      </section>
    );
  };
}

EditMatchForm.propTypes = {
  handleSubmit: PropTypes.func,
  errors: PropTypes.object
};

export default EditMatchForm;