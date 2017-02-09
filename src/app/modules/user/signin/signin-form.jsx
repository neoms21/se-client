import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field} from 'redux-form'
import './signin.scss';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

let SigninForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <section>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit} className="signin-user">
                <Field name="userName"
                       component={renderTextField} label="User name" fullWidth={true}/>
                <Field name="password" type="password"
                       component={renderTextField} label="Password"
                       fullWidth={true}
                />
                <div className="button-row">
                    <RaisedButton label="Sign in" primary={true} type="submit" disabled={submitting}/>
                    <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset}/>
                </div>
            </form>
        </section>
    )
};

export default SigninForm;
