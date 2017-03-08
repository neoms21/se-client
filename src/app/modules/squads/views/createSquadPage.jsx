import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Observable } from 'rxjs';
import CreateSquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'

const onSubmit = (values, dispatch) => {
    console.log(values);
    let squadDetails = {squadName: values.squadName};
    dispatch(createSquad(squadDetails));
};

const validate = values => {
    const errors = {};
    if (!values.squadName) {
        errors.squadName = 'Required'
    }
    return errors;
};

export default reduxForm({
    form: 'squadCreation', // a unique identifier for this form
    validate,
    onSubmit
})(CreateSquadForm)

// export default CreateSquadForm