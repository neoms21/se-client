import React from 'react';
import {reduxForm} from 'redux-form';
import SigninForm from './signin-form';
import {signinUser} from '../actions/user-actions';
import {sendCommand, login} from '../../../services/server-service';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

const onSubmit = (values, dispatch, xxxx) => {
    let userDetails = {userName: values.userName, password: values.password};
    //dispatch(signinUser(userDetails));
    // login(values.userName, values.password)
    //     .subscribe(succ => {
    //
    //     }, err => {
    //         throw new SubmissionError({userName: err})
    //     })
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

function mapStateToProps(state, ownProps) {
    return {
        errors: state.rootReducer.userReducer.errors,
        handleSubmit: onSubmit
    };
}

// SigninForm = reduxForm({
//     form: 'SigninForm', // a unique identifier for this form
//     validate,
//     onSubmit
// })(SigninForm);

// const SignInPage = () => {
//     return(
//         <SigninForm handleSubmit={onSubmit}/>
//     )
// }

const SigninPageConnected = connect(mapStateToProps)(SigninForm);

export default SigninPageConnected;

