import React from 'react';
//import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, Card, IconButton, CardHeader, CardText, SelectField,  MenuItem} from 'material-ui';
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
            players: [],
            nextId: 1
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
        this.setState({pristine: false, showError: false, value: e.target.value});
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
            players: [...this.state.players, newPlayer],
            nextId: this.state.nextId + 1
        })
    };


    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        const {errors, handleSubmit} = this.props;
        const generalError = errors === undefined || errors.general === undefined || errors.length === 0
            ? '' : errors[0];

        const xxx = {padding: "2px", display: "inline-block"};

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <form ref="form" className="edit-match-form"
                             onSubmit={handleSubmit}>
                    <div className="top-section">
                        <SelectField
                            name="team"
                            value={this.state.value} floatingLabelText="Select team"
                            onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </SelectField>
                        {/*<FormsySelect*/}
                            {/*name="team"*/}
                            {/*hintText="Select your team"*/}
                            {/**/}
                            {/*onChange={this.handleChangeTeam}*/}
                        {/*/>*/}
                        {/*<FormsyDate*/}
                            {/*name="when" required*/}
                            {/*hintText="Enter the date of the match"*/}
                            {/*floatingLabelText="Date of the match"*/}
                            {/*onChange={this.handleChange}*/}
                        {/*/>*/}
                        {/*<FormsyText*/}
                            {/*name="opposition"*/}
                            {/*validations="minLength:8"*/}
                            {/*validationError={this.errorMessages.oppositionError}*/}
                            {/*required*/}
                            {/*hintText="Enter your opponents (at least 8 characters)"*/}
                            {/*floatingLabelText="Opponents name"*/}
                            {/*onChange={this.handleChange}*/}
                        {/*/>*/}
                    </div>
                    <h3>Players
                        <IconButton
                            iconClassName="material-icons" tooltip="Add"
                            tooltipPosition="top-right" onClick={this.addPlayer}>add_circle</IconButton>
                    </h3>
                    <ul className="players-section">
                        {this.state.players.map(player =>
                            <li key={player.id} className="player-card">
                                {/*<PlayerSelectionComponent player={player} />*/}
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

