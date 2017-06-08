import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import '../../../core.scss'
import {connect} from 'react-redux'
import {validateRequiredFields} from '../../../validators/validations'

// import asyncValidate from './asyncValidate'

const validate = values => {
    let errors = {};
    let requiredErrors = validateRequiredFields(values, ['playerName', 'age']); // find our how to combine with other validations
    let ageError = {};
    if (values.age && values.age < 8) {
        ageError.age = "Player's age must be greater than 8";
    }
    let assign = Object.assign({}, requiredErrors, ageError);

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

class PlayerForm extends React.Component {

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

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
                <div className="button-row">
                    <RaisedButton label="Add" primary={true} type="submit" disabled={submitting}/>
                    <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
                </div>
            </form>
        );
    }
}
;


// export default reduxForm({
//     form: 'PlayerForm',  // a unique identifier for this form
//     validate
// })(playerForm)

function mapStateToProps(state, ownProps) {
    //return {}
    //let squad = getSquad(state, ownProps.id);
    return {
        initialValues: {}
    }
}


PlayerForm = reduxForm({
    form: 'PlayerForm',
    validate,
    enableReinitialize: true
})(PlayerForm);

PlayerForm = connect(
    mapStateToProps,
)(PlayerForm);

export default PlayerForm

// }
