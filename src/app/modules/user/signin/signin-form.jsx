import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './signin.scss';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const SigninForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="register-user">
            <Field name="userName"
                   component={renderTextField} label="User name" fullWidth={true}
            />
            <Field name="passwordType" type="checkbox" component="input" />
            <Field name="password" type="password"
                   component={renderTextField} label="Password"
                   fullWidth={true}
            />
            <div className="button-row">
                <RaisedButton label="Sign in" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} />
            </div>
        </form>
    )
};

export default SigninForm;
