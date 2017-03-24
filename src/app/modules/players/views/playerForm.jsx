import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
//noinspection JSUnresolvedVariable
import {FormsyText} from 'formsy-material-ui';
import Formsy from 'formsy-react';

let {Component, PropTypes} = React;


export default class PlayerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true
        };
    }

    static propTypes = {
        handleSubmit: PropTypes.func
    };

    errorMessages = {
        nameError: 'Name is mandatory',
        ageError: 'Age is mandatory',
        positionError: 'Position is mandatory',
        emailError: 'Email is mandatory',
    };

    handleChange = (e) => {
        // remove error
        this.setState({pristine: false, showError: false});
    };

    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        const {handleSubmit} = this.props;

        return (
            <Formsy.Form onSubmit={handleSubmit}>
                <FormsyText
                    name="name"
                    value={this.props.name}
                    validationError={this.errorMessages.nameError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter the name of the player"
                    floatingLabelText="Player name"
                    onChange={this.handleChange}
                />

                <div className="button-row">
                    <RaisedButton label="Register" primary={true} type="submit" disabled={this.state.isSubmitting}/>
                    <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                </div>
            </Formsy.Form>
        );
    };
}

