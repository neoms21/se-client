import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {squadReducer} from '../reducers/squad-reducer'
import {connect} from 'react-redux';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

let CreateSquadForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="register-user">
            <Field name="squadName"
                   component={renderTextField} label="Squad Name" fullWidth={true}
            />

            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
            </div>
        </form>
    )
};

CreateSquadForm = connect(
    state => {
        return {
            initialValues: state // pull initial values from account reducer
        }},
    { squad: squadReducer }               // bind account loading action creator
)(CreateSquadForm);


export default CreateSquadForm;
