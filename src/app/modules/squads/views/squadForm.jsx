import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'material-ui'
import {validateRequiredFields} from '../../../validations'
import '../../../core.scss'

const validate = values => {
    return validateRequiredFields(values, ['squadName'])
};

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);


const squadForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="squadName" component={renderTextField} label="Squad Name"/>
            </div>
            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'SquadForm',  // a unique identifier for this form
    validate
})(squadForm)
