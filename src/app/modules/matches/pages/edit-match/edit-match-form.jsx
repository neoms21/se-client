import React from 'react';
import PropTypes from 'prop-types';
import {
  RaisedButton,
  IconButton,
  MenuItem,
  DatePicker,
  Chip,
  Avatar,
  FontIcon
} from 'material-ui';
import './edit-match.scss';
import PlayerSelectionComponent from "./player-seelction-component";
import { Field, FieldArray, reduxForm } from 'redux-form';
import { DatePickerComponent } from '../../../../components/date-picker/date-picker';
import { TextField, SelectField } from '../../../../components/form';

class EditMatchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nextId: 0,
      playersPositions: []
    }
  }

  getErrorClasses = () => {
    let classes = 'submission-errors';
    return classes + (this.state.showError ?
      'visible' :
      'hidden');
  };

  // componentWillReceiveProps = (nextProps) => {     this.setState({         // set our state to control error display if we get a non field
  // error         showError: nextProps.errors.general.length !== 0     });
  //
  //     let fieldErrors = Object.assign({}, nextProps.errors.specific);     this.refs.form.updateInputsWithError(fieldErrors); };

  addPlayer = (e) => {
    const newPlayer = {
      id: this.state.nextId,
      position: '',
      player: '',
      isEditing: true
    };
    let copyValues = this.state.playersPositions.concat();
    copyValues.push(newPlayer);

    // now change it
    this.setState({
      nextId: this.state.nextId + 1,
      playersPositions: copyValues
    })
  };

  deletePlayer = (playerId) => {
    let copyValues = {
      ...this.state.playersPositions
    };

    const playerIndexToBeDeleted = copyOfValues.players.findIndex((copyPlayer) => copyPlayer.id === playerId);
    if (playerIndexToBeDeleted > -1) {
      copyOfPlayers.splice(playerIndexToBeDeleted, 1);
    }
    // now we have trimmed it, update the state
    this.setState({ playersPositions: copyValues });
  };

  getAvailablePlayers = () => {
    let players = [];
    return [];
  }

  reset = () => {
    this.refs.form.reset();
  };

  renderDatePicker = ({
    input,
    label,
    meta: {
      touched,
      error
    },
    ...custom
  }) => (<DatePicker errorText={touched && error} hintText={label} floatingLabelText={label} autoOk={true} {...custom}/>);

  renderPlayers({ fields, meta: { touched, error, submitFailed } }) {
    return (
      <div className="players-section">
        <div>
          <span>Players</span>
          <IconButton iconClassName="material-icons" tooltip="Add" tooltipPosition="top-right" onTouchTap={() => fields.push({isEditing: true})}>add_circle</IconButton>
        </div>
        {fields.map((member, index) => {
            let item = fields.get(index);
          return (
              <div className="player-card" key={index}>
                <PlayerSelectionComponent deletePlayer={::this.deletePlayer} availablePlayers={::this.getAvailablePlayers()} item={item}/>
              </div>);
          })
        }
      </div>
    );
  }

  componentDidMount = () => {
    // const initData = {     "firstName": this.props.currentUser.firstName,     "lastName": this.props.currentUser.lastName,     "sex":
    // this.props.currentUser.sex,     "email": this.props.userEmail,     "phoneNumber": this.props.currentUser.phoneNumber };
    //
    // this.props.initialize(initData);
  };

  shouldComponentUpdate(props) {
    return true;
  }

  render = () => {
    const {
      pristine,
      handleSubmit,
      squads,
      disabled,
      reset,
      errors
    } = this.props;
    // const generalError = errors === undefined || errors.general === undefined || errors.length === 0     ? '' : errors.general;

    return (
      <section className="edit-match">
        <h1>Create match</h1>
        <form className="edit-match-form" onSubmit={handleSubmit}>
          <div className="top-section">
            <Field component={SelectField} name="team" label="Select team">
                {squads.map(squad =>
                    <MenuItem key={squad._id} value={squad._id} primaryText={squad.name}/>)
                }
            </Field>
            <Field component={::this.renderDatePicker} name="matchDate" label="Match date"
                   format={(v) => ((v === '') ? null : v)}/>
            <Field component={TextField} name="opposition" label="Opponents name" />
          </div>
           <FieldArray name="playerPositions" component={::this.renderPlayers}/>
          {/*<div className={getErrorClasses()}>*/}
          {/*<span>{generalError}</span>*/}
          {/*</div>*/}
          <div className="button-row">
            <RaisedButton label="Save" primary={true} type="submit"/>
            <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
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