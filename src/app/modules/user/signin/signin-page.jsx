import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const onSubmit = (values, dispatch) => {
    let userDetails = {userName: values.userName, password: values.password };
    dispatch(signinUser(userDetails));
};

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength60 = maxLength(60);
const minLength8 = maxLength(8);

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;


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
    form: 'signinForm', // a unique identifier for this form
    validate,
    onSubmit
})(SigninForm)

