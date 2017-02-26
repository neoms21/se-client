import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {FormsyText} from 'formsy-material-ui';
import Formsy from 'formsy-react';
let {Component, PropTypes} = React;
import './signin.scss';

export default class SigninForm extends Component {
    isError: false;

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            userName: '',
            password: '',
            showError: false
        };
    }

    static propTypes = {
        handleSubmit: PropTypes.func,
        error: PropTypes.string
    };

    errorMessages = {
        wordsError: "Please only use letters",
        numericError: "Please provide a number",
        urlError: "Please provide a valid URL",
        userNameError: 'Please provide your user name (your email)'
    };

    enableButton = () => {
        this.setState({
            canSubmit: true,
        });
    };

    disableButton = () => {
        this.setState({
            canSubmit: false,
        });
    };

    componentWillUpdate = (nextProps, nextState) => {
        // perform any preparations for an upcoming update
        //this.setState({error: nextProps.error});
        // this.isError = nextProps.error !== undefined;
    };

    handleSubmit = () => {
        //submit to container handler
        this.props.handleSubmit({userName: this.state.userName});
    };

    userNameChange = (e) => {
        this.setState({pristine: false, showError: false, userName: e.target.value});
        this.isError = false;
    };

    passwordChange = (e) => {
        this.setState({pristine: false, error: undefined, password: e.target.value});
    };

    isResetDisabled = () => {
        return this.state.pristine || !this.state.isSubmitting;
    };

    getErrorClasses = () => {
        let classes = 'submission-errors ';
        return classes + (this.state.showError ? 'visible' : 'hidden');
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            // set something
            showError: nextProps.error !== undefined
        });
    };

    // handleChange(event) {
    //     const email = event.target.value;
    //     this.setState({email});
    //     console.log('state', this.state)
    // }

    render = () => {
        const {error, handleSubmit} = this.props;
        const {userName, password} = this.state;

        return (
            // <section>
            //     <h1>Sign in</h1>
            //     <ValidatorForm
            //         ref="form" instantValidate
            //         onSubmit={::this.handleSubmit}>
            //         <TextValidator
            //             floatingLabelText="User name"
            //             onChange={::this.userNameChange}
            //             name="userName"
            //             value={userName}
            //             fullWidth={true}
            //             validators={['required', 'isEmail']}
            //             errorMessages={['this field is required', 'is not valid email']}
            //         />
            //         <TextValidator
            //             floatingLabelText="Password"
            //             onChange={::this.passwordChange}
            //             name="password"
            //             value={password}
            //             validators={['required']}
            //             errorMessages={['this field is required']}
            //         />
            //         <div className="submission-errors">
            //             <span>{error}</span>
            //         </div>
            //         <RaisedButton type="submit" label="Sign in" primary={true}/>
            //         <RaisedButton label="Clear Values" disabled={::this.isResetDisabled()}/>
            //     </ValidatorForm>
            // </section>

            <Formsy.Form ref="form" onValid={this.enableButton}
                         onInvalid={this.disableButton}
                         onValidSubmit={handleSubmit}
                         className="signin-user">
                <FormsyText
                    name="userName"
                    validations="isEmail"
                    validationError={this.errorMessages.userNameError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your user name (usually email)"
                    floatingLabelText="User Name"
                    onChange={this.userNameChange}
                />
                <FormsyText
                    name="password"
                    validations="isWords"
                    validationError={this.errorMessages.wordsError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your password"
                    floatingLabelText="Password"
                />
                <div className={::this.getErrorClasses()}>
                    <span>{error}</span>
                </div>
                <div className="button-row">
                    <RaisedButton label="Sign in" primary={true} type="submit"/>
                    <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                </div>
            </Formsy.Form>
        );
    }
}


