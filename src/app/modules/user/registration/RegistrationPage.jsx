import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import {registerUser} from '../actions/userActions';

// get state we are interested in
const mapStateToProps = (state) => {
    return {
        //registration: state.userRegistration
    }
};

// we are interested in these dispatchers
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveRegistration: (userDetails) => {
            dispatch(registerUser(userDetails));
        }
    }
};

// connect them
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
