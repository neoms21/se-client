import React from 'react';
//import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, IconButton, SelectField, MenuItem, TextField, DatePicker} from 'material-ui';
//import Formsy from 'formsy-react';
import {ServerService} from '../../../../services/server-service';
import './edit-match.scss';
import PlayerSelectionComponent from "./player-seelction-component";

export default class EditMatchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false,
            nextId: 1,
            validationErrors: {},
            values: {
                team: '',
                matchDate: new Date(),
                opponents: '',
                players: []
            }
        };
    }

    errorMessages = {
        wordsError: "Please only use letters",
        whenError: 'Please specify date of match',
        emailError: 'Please provide your email',
        positionError: 'The position must be minimum of 2 letters, numbers or symbols',
        passwordConfirmError: 'The passwords must match',
        oppositionError: 'Please provide opposition name'
    };

    handleChange = (e) => {
        // remove error
        this.setState({
            pristine: false, showError: false, values: {
                [e.target.name]: e.target.value
            }
        });
    };

    handleChangeTeam = (e, team) => {
        ServerService.sendQuery('Players', {team})
            .subscribe(p => {
                this.players.push(p);
            });

        this.handleChange(e);
    };

    getErrorClasses = () => {
        let classes = 'submission-errors ';
        return classes + (this.state.showError ? 'visible' : 'hidden');
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            // set our state to control error display if we get a non field error
            showError: nextProps.errors.general.length !== 0
        });

        let fieldErrors = Object.assign({}, nextProps.errors.specific);
        this.refs.form.updateInputsWithError(fieldErrors);
    };

    addPlayer = (e) => {
        e.stopPropagation();
        const newPlayer = {id: this.state.nextId, position: '', isEditing: true};
        this.setState({
            nextId: this.state.nextId + 1,
            values: {
                players: [...this.state.values.players, newPlayer]
            }
        })
    };

    deletePlayer = (player) => {
        let copyOfPlayers = this.state.values.players.concat();
        const playerIndexToBeDeleted = copyOfPlayers.findIndex((copyPlayer) => copyPlayer.id === player.id);
        if (playerIndexToBeDeleted > -1) {
            copyOfPlayers.splice(playerIndexToBeDeleted, 1);
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // send values back to page
        this.props.handleSubmit(this.state.values);
    };

    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        const {errors, handleSubmit} = this.props;
        const generalError = errors === undefined || errors.general === undefined || errors.length === 0
            ? '' : errors[0];

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <form ref="form" className="edit-match-form"
                      onSubmit={handleSubmit}>
                    <div className="top-section">
                        <SelectField
                            name="team"
                            value={this.state.values.team} floatingLabelText="Select team"
                            onChange={this.handleChangeTeam}
                        >
                        </SelectField>
                        <DatePicker name="matchDate" value={this.state.values.matchDate}
                                   floatingLabelText="Select when the match is"
                                    container="inline" mode="landscape"
                                   onChange={this.handleChange}>
                        </DatePicker>
                        <TextField name="opposition" floatingLabelText="Opponents name"
                                   onChange={this.handleChange}></TextField>
                    </div>
                    <h3>Players <IconButton
                        iconClassName="material-icons" tooltip="Add"
                        tooltipPosition="top-right" onClick={this.addPlayer}>add_circle</IconButton>
                    </h3>
                    <ul className="players-section">
                        {this.state.values.players.map(player =>
                            <li key={player.id} className="player-card">
                                <PlayerSelectionComponent player={player} deletePlayer={::this.deletePlayer}/>
                            </li>
                        )}
                    </ul>

                    <div className={::this.getErrorClasses()}>
                        <span>{generalError}</span>
                    </div>
                    <div className="button-row">
                        <RaisedButton label="Save" primary={true} type="submit"/>
                        <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                    </div>
                </form>
            </section>
        );
    }
}

EditMatchForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    errors: React.PropTypes.object
};

