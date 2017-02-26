import React from 'react';
import SigninForm from './signin-form';
import {signinUser} from '../actions/user-actions';
import {connect} from 'react-redux';


function mapStateToProps(state, ownProps) {
    return {
        error: state.rootReducer.userReducer.errors,
        values: {userName: '', password: ''}
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

// do a redux subscription
const SigninPageConnected = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

export default SigninPageConnected;

