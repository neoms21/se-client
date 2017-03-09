import React from 'react';
import EditMatchForm from './edit-match-form';
import {registerMatch} from '../../actions/match-actions';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        errors: state.matches.errors
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            dispatch(registerMatch(values));
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(EditMatchForm);


