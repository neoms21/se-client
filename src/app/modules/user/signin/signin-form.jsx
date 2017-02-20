import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import {Field} from 'redux-form';
import { createForm } from 'redux-form-utils';
import './signin.scss';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const BasicForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <section>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit} className="signin-user">
                <TextField name="userName" floatingLabelText="User name" errorText={}
                           hintText="User name" fullWidth={true}/>
                <TextField name="password" type="password"
                           floatingLabelText="Password" label="Password"
                       fullWidth={true}/>
                <div className="button-row">
                    <RaisedButton label="Sign in" primary={true} type="submit" disabled={submitting}/>
                    <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset}/>
                </div>
            </form>
        </section>
    )
};

const SigninForm = createForm({
    form: 'signin-form',
    fields: ['userName', 'password']
})(BasicForm);

export default SigninForm;
