import React from 'react';
import EditMatchForm from './edit-match-form';
import {registerMatch} from '../../actions/match-actions';
import {connect} from 'react-redux';
import {ServerService} from '../../../../services/server-service';
import {sendQuery} from '../../../../services/server-service';
import {reduxForm} from 'redux-form';

function mapStateToProps(state, ownProps) {
    return {
        errors: state.matches.errors,
        squads: state.squads.squads,
        disabled: false
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
