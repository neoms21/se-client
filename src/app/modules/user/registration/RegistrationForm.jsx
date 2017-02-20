import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './register-user.scss';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const RegistrationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="register-user">
            <Field name="name"
                   component={renderTextField} label="Name" fullWidth={true}
            />
            <Field name="email" type="email"
                   component={renderTextField} label="Email" fullWidth={true}
            />
            <Field name="passwordType" type="checkbox" component="input" />
            <Field name="password" type="password"
                   component={renderTextField} label="Password"
                   fullWidth={true}
            />
            <Field name="passwordConfirm" type="password"
                   component={renderTextField} label="Confirm password"
                   fullWidth={true}
            />
            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} />
            </div>
        </form>
    )
};


export default RegistrationForm;
