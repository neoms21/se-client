import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {FormsyText} from 'formsy-material-ui';
import Formsy from 'formsy-react';

let {Component, PropTypes} = React;


export default class CreateSquadForm extends Component {

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
        squadNameError: 'Please provide your squad name (at least 8 letters)'
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
                    name="squadName"
                    value={this.props.squadName}
                    validations="minLength:8"
                    validationError={this.errorMessages.squadNameError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter the name of the squad"
                    floatingLabelText="Squad name"
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

