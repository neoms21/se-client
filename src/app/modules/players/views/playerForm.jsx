import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import '../../../core.scss'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {validateRequiredFields} from '../../../validations'
// import asyncValidate from './asyncValidate'

const validate = values => {
    console.log(values);
    let errors = {};
    let requiredErrors = validateRequiredFields(values, ['playerName', 'age']); // find our how to combine with other validations
    let ageError = {};
    if (values.age && values.age < 8) {
        ageError.age = "Player's age must be greater than 8";
    }
    let assign = Object.assign({}, requiredErrors, ageError);

    console.log(assign);
    return assign;
};

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const renderSelectField = props => (
    <SelectField
        floatingLabelText={props.label}
        errorText={props.touched && props.error}
        {...props}>
    </SelectField>
)

const playerForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="playerName" component={renderTextField} label="Player Name"/>
            </div>
            <div>
                <Field name="age" type="number" component={renderTextField} label="Age"/>
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email"/>
            </div>
            <div>
                <Field name="phone" component={renderTextField} label="Phone"/>
            </div>
            <div>
                <Field name="position" component={renderSelectField} label="Position">
                    <MenuItem value={'striker'} primaryText="Striker"/>
                    <MenuItem value={'goalKeeper'} primaryText="Goalkeeper"/>
                    <MenuItem value={'midFielder'} primaryText="MidFielder"/>
                </Field>
            </div>
            <div className="button-row">
                <RaisedButton label="Add" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'PlayerForm',  // a unique identifier for this form
    validate
})(playerForm)

// }
