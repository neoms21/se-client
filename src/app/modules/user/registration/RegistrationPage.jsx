import React from 'react';
import { reduxForm } from 'redux-form';
import RegistrationForm from './RegistrationForm';
import {registerUser} from '../actions/user-actions';

const onSubmit = (values, dispatch) => {
    let userDetails = {name: values.name, password: values.password, email: values.email };
    dispatch(registerUser(userDetails));
};

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

const maxLength60 = maxLength(60);
const minLength8 = maxLength(8);

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;


const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 60) {
        errors.name = 'Must be 60 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be at least 8 letters and/or numbers'
    }
    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Required'
    } else if (values.passwordConfirm.length < 8) {
        errors.passwordConfirm = 'Must be at least 8 letters and/or numbers'
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'Must match password';
    }

    return errors;
};

export default reduxForm({
    form: 'RegistrationForm', // a unique identifier for this form
    validate,
    onSubmit
})(RegistrationForm)

