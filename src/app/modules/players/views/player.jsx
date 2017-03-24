import React from 'react';
import {connect} from 'react-redux';
import PlayerForm from './playerForm'

const mapStateToProps = (state, ownProps) => {
    return {
        //error: state.squads.error,
        values: {},
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            console.log(values);

        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required'
            }
            return errors;
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);