import React from 'react';
import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, Card, IconButton, CardHeader, CardText} from 'material-ui';
import Formsy from 'formsy-react';
import './edit-match.scss';

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
        this.setState({pristine: false, showError: false});
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

    addPlayer = () => {
        const newPlayer = {id: this.state.nextId, position: ''};
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

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <Formsy.Form ref="form" className="edit-match-form"
                             onValidSubmit={handleSubmit}>
                    <div className="top-section">
                        <FormsySelect
                            name="team"
                            hintText="Select your team"
                            floatingLabelText="Select team"
                            onChange={this.handleChange}
                        />
                        <FormsyDate
                            name="when" required
                            hintText="Enter the date of the match"
                            floatingLabelText="Date of the match"
                            onChange={this.handleChange}
                        />
                        <FormsyText
                            name="opposition"
                            validations="minLength:8"
                            validationError={this.errorMessages.oppositionError}
                            required
                            hintText="Enter your opponents (at least 8 characters)"
                            floatingLabelText="Opponents name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <h3>Players
                        <IconButton
                            iconClassName="material-icons" tooltip="Add"
                            tooltipPosition="top-right" onClick={this.addPlayer}>add_circle</IconButton>
                    </h3>
                    <div className="players-section">

                        {this.state.players.map(player =>
                            <Card key={player.id} className="player-card">
                                    <div className="">
                                        <FormsySelect
                                            name="player"
                                            required
                                            hintText="Select player"
                                            floatingLabelText="Select player"
                                            onChange={this.handleChange}
                                        />
                                        <FormsyText
                                            name="position"
                                            validations="minLength:2"
                                            validationError={this.errorMessages.positionError}
                                            required updateImmediately
                                            hintText="Enter their starting position"
                                            floatingLabelText="Starting position"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </CardText>
                            </Card>
                        )}
                    </div>

                    <div className={::this.getErrorClasses()}>
                        <span>{generalError}</span>
                    </div>
                    <div className="button-row">
                        <RaisedButton label="Save" primary={true} type="submit"/>
                        <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                    </div>
                </Formsy.Form>
            </section>
        );
    }
}

EditMatchForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    errors: React.PropTypes.object
};

