import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
// import asyncValidate from './asyncValidate'

const validate = values => {
    const errors = {};
    const requiredFields = ['playerName'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = field + 'is Required';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

let {Component, PropTypes} = React;


// export default class PlayerForm extends Component {

// constructor(props) {
//     super(props);
//     this.state = {
//         isSubmitting: false,
//         pristine: true
//     };
// }
//
// static propTypes = {
//     handleSubmit: PropTypes.func
// };
//
// handleChange = (e) => {
//     // remove error
//     this.setState({pristine: false, showError: false});
// };

// reset = () => {
//     this.refs.form.reset();
// };

const handleSubmit = (e) => {
    this.props.handleSubmit(this.values, e);
};


const playerForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="playerName" component={renderTextField} label="Player Name"/>
            </div>
            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
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
