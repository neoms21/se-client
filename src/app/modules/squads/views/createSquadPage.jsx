import React from 'react';
import {connect} from 'react-redux';
import {Observable} from 'rxjs';
import CreateSquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'

const mapStateToProps = (state, ownProps) => {
    return {
        //error: state.squads.error,
        //values: {userName: '', password: ''}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            console.log(values);
            let squadDetails = {squadName: values.squadName};
            dispatch(createSquad(squadDetails));
        },
        validate: (values) => {
            const errors = {};
            if (!values.squadName) {
                errors.squadName = 'Required'
            }
            return errors;
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(CreateSquadForm);