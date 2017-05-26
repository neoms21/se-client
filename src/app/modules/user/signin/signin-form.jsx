import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import {FormsyText} from 'formsy-material-ui';
import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import './signin.scss';

export default class SigninForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false
        };
    }

    static propTypes = {
        handleSubmit: PropTypes.func,
        error: PropTypes.string
    };

    errorMessages = {
        wordsError: "Please only use letters",
        userNameError: 'Please provide your user name (your email)'
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
            // set our state to control error display
            showError: nextProps.error !== undefined
        });
    };

    reset = () => {
      this.refs.form.reset();
    };

    render = () => {
        const {error, handleSubmit} = this.props;

        return (
            <Formsy.Form ref="form"
                         onValidSubmit={handleSubmit}
                         className="signin-user">
                <FormsyText
                    name="userName"
                    validations="isEmail"
                    validationError={this.errorMessages.emailError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your user name (usually email)"
                    floatingLabelText="User Name"
                    onChange={this.handleChange}
                />
                <FormsyText
                    name="password"
                    validations="isWords"
                    validationError={this.errorMessages.wordsError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your password"
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                />
                <div className={::this.getErrorClasses()}>
                    <span>{error}</span>
                </div>
                <div className="button-row">
                    <RaisedButton label="Sign in" primary={true} type="submit" disabled={this.state.isSubmitting}/>
                    <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                </div>
            </Formsy.Form>
        );
    }
}
