import React from 'react';
import { reduxForm } from 'redux-form';
import SigninForm from './signin-form';
import {signinUser} from '../actions/user-actions';

const onSubmit = (values, dispatch) => {
    let userDetails = {userName: values.userName, password: values.password };
    dispatch(signinUser(userDetails));
};

const validate = values => {
    const errors = {};
    if (!values.userName) {
        errors.userName = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
};

export default reduxForm({
    form: 'SigninForm', // a unique identifier for this form
    validate,
    onSubmit
})(SigninForm)

