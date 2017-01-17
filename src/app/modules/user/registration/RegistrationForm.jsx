import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
//import {reduxForm} from 'redux-form';
import {s} from './register-user.scss';


let RegistrationForm = React.createClass({
    errors: [],

    handleChange: function (fieldName) {

    },

    handleHideShowPassword: function () {
        // this.setState({
        //     passwordType: this.state.passwordType === 'text' ? 'password' : 'text'
        // })
    },

    getInitialState() {
        return {
            passwordType: 'text'
        }
    },

    getError(fieldName) {
        return "";
    },

    render() {
        const {onSaveRegistration} = this.props;
        return (
            <section className="register-user">
                <h1>Register new user</h1>
                <form onSubmit={onSaveRegistration}>
                    <TextField type='text' floatingLabelText='Please enter your name - required' name='name'
                               onChange={this.handleChange.bind(this, 'name')} fullWidth={true}
                               maxLength={120} errorText={this.getError('name')}/>
                    <TextField type='email' floatingLabelText='Email is required, and will be used as your user name'
                               name='email' fullWidth={true}
                               onChange={::this.handleChange('email')}
                               maxLength={120} errorText={this.getError('email')}/>
                    <Checkbox label=" Hide password"
                              checked={this.state.passwordType === 'password'}
                              onChange={::this.handleHideShowPassword()}/>
                    <TextField type='text'
                               floatingLabelText='Please enter your password - it needs to be at least 8 characters, and is required'
                               name='password' fullWidth={true}
                               onChange={this.handleChange.bind(this, 'password')}
                               maxLength={120} errorText={this.getError('password')}/>
                    <TextField type='text' floatingLabelText='Please re-enter your password - it needs to match'
                               name='passwordConfirm' fullWidth={true}
                               onChange={this.handleChange.bind(this, 'passwordConfirm')}
                               maxLength={120} errorText={this.getError('passwordConfirm')}/>

                    <div className="error">
                        {this.errors.map(err => <div>{err}</div>)}
                    </div>

                    <div className="button-row">
                        <RaisedButton label="Register" primary={true}/>
                    </div>
                </form>
            </section>
        );
    }
});

// Decorate the form component
// RegistrationForm = reduxForm({
//     form: 'Registration' // a unique name for this form
// })(RegistrationForm);

export default RegistrationForm;
