import React from 'react';
import SigninForm from './signin-form';
import {signinUser} from '../actions/user-actions';
import {connect} from 'react-redux';

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
        errors: {userName: state.rootReducer.userReducer.errors}
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            let userDetails = {userName: values.userName, password: values.password};
            dispatch(signinUser(userDetails));
        }
    }
};

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

const SigninPageConnected = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

export default SigninPageConnected;

