import React from 'react';
//import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, IconButton, SelectField, MenuItem, TextField, DatePicker} from 'material-ui';
//import Formsy from 'formsy-react';
import {sendQuery} from '../../../../services/server-service';
import './edit-match.scss';
import PlayerSelectionComponent from "./player-seelction-component";

export default class EditMatchForm extends React.Component {

    teamsSubscription;
    availablePlayers = [];

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false,
            nextId: 1,
            validationErrors: {},
            teams: [],
            values: {
                team: '',
                matchDate: new Date(),
                opponents: '',
                players: []
            }
        };

        // get the teams
        //todo: is this the best place
        this.teamsSubscription = sendQuery('Teams');
        this.teamsSubscription.subscribe((teamsEvent) => {
            if (teamsEvent.properties.isFailure || !teamsEvent.teams) {
                this.setState({
                    showError: true,
                    error: 'Unable to get list of teams'
                });
            } else {
                this.setState({
                    teams: this.state.teams.concat(teamsEvent.teams)
                });
            }
        }, (err) => {
        }, () => {
            this.teamsSubscription.unsubscribe();
        });
    }

    handleChange = (e) => {
        let copyValues = {...this.state.values};
        copyValues[e.target.name] = e.target.value;

        // remove error
        this.setState({
            pristine: false, showError: false, values: copyValues
        });
    };

    handleDateChange = (e, newDate) => {
        let copyValues = {...this.state.values};
        copyValues.matchDate = newDate;

        // now set it
        this.setState({
            pristine: false,
            showError: false,
            values: copyValues
        });
    };

    handleChangeTeam = (e, team) => {
        const subscription = sendQuery('Players', {team});

        subscription.subscribe(playersEvent => {
                this.availablePlayers = playersEvent.availablePlayers;
            },
            (err) => {
                this.setState({
                    showError: true,
                    error: 'Unable to get list of players'
                });
            },
            () => {
                subscription.unsubscribe();
            });

        // change the team in state
        let copyValues = {...this.state.values};
        copyValues[e.target.name] = e.target.value;

        // remove error
        this.setState({
            pristine: false, showError: false, values: copyValues
        });
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
        const newPlayer = {id: this.state.nextId, position: '', isEditing: true};
        let copyValues = {...this.state.values};
        copyValues.players.push(newPlayer);

        // now change it
        this.setState({
            nextId: this.state.nextId + 1,
            values: copyValues
        })
    };

    deletePlayer = (playerId) => {
        let copyValues = {...this.state.values};
        //let copyOfPlayers = this.state.values.players.concat();
        const playerIndexToBeDeleted = copyOfValues.players.findIndex((copyPlayer) => copyPlayer.id === playerId);
        if (playerIndexToBeDeleted > -1) {
            copyOfPlayers.splice(playerIndexToBeDeleted, 1);
        }
        // now we have trimmed it, update the state
        this.setState({
            values: copyValues
        });
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
            ? '' || this.state.error : errors[0];

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <form ref="form" className="edit-match-form"
                      onSubmit={handleSubmit}>
                    <div className="top-section">
                        <SelectField
                            name="team"
                            value={this.state.values.team} floatingLabelText="Select team"
                            onChange={this.handleChangeTeam}>
                            {this.state.teams.map(team => {
                                <MenuItem key={team._id} value={team.name} primaryText={team.name}/>
                            })}
                        </SelectField>
                        <DatePicker name="matchDate" value={this.state.values.matchDate}
                                    floatingLabelText="Select when the match is"
                                    container="inline" mode="landscape"
                                    onChange={this.handleDateChange}>
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
                                <PlayerSelectionComponent player={player} deletePlayer={::this.deletePlayer}
                                                          availablePlayers={this.availablePlayers}/>
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

