import React from 'react';
import RegistrationForm from './registration-form';
import {registerUser} from '../actions/user-actions';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        errors: state.user.errors
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            const userDetails = {...values};
            dispatch(registerUser(userDetails));
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);


