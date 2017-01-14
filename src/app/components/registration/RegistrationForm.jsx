import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {reduxForm} from 'redux-form';


let RegistrationForm = React.createClass({
    handleChange: function (fieldName) {

    },

    handleHideShowPassword: function () {
        this.setState({
            passwordType: this.state.passwordType === 'text' ? 'password' : 'text'
        })
    },

    getInitialState() {
        return {
            passwordType: 'text'
        }
    },

    getError(fieldName) {
        return "";
    },

    render: function () {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <TextField type='text' floatingLabelText='Name' name='name'
                               onChange={this.handleChange.bind(this, 'name')}
                               maxLength={120} errorText={this.getError('name')}/><br />
                    <TextField type='email' floatingLabelText='Email' name='email'
                               onChange={this.handleChange.bind(this, 'email')}
                               maxLength={120}/><br />
                    <Checkbox label="Hide password"
                              checked={this.state.passwordType === 'password'}
                              onChange={this.handleHideShowPassword.bind(this, this.state.isPasswordHidden)}/>
                    <TextField type={this.state.passwordType} floatingLabelText='Password'
                               name='password' onChange={this.handleChange.bind(this, 'password')}
                               maxLength={120}/><br />
                    <TextField type='telephone' floatingLabelText='Telephone' name='telephone'
                               onChange={this.handleChange.bind(this, 'telephone')} maxLength={20}/>
                    <div>
                        <RaisedButton label="Register" primary={true} />
                    </div>
                </form>
            </div>
        );
    }
});

// Decorate the form component
RegistrationForm = reduxForm({
    form: 'Registration' // a unique name for this form
})(RegistrationForm);

export default RegistrationForm;
