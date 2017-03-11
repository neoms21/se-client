import React from 'react';
import SigninForm from './signin-form';
import {signinUser} from '../actions/user-actions';
import {connect} from 'react-redux';


function mapStateToProps(state, ownProps) {
    return {
        error: state.user.error,
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
export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);

