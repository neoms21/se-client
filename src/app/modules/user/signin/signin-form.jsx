import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
let {Component, PropTypes} = React;
import './signin.scss';

// const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
//     <TextField hintText={label}
//                floatingLabelText={label}
//                errorText={touched && error}
//                {...input}
//                {...custom}
//     />
// );

export default class SigninForm extends Component {
    values = {};

    constructor(props) {
        super(props);
    }

    static propTypes = {
        handleSubmit: PropTypes.func,
        errors: PropTypes.object
    };

    handleChange = (e) => {
        this.values[e.target.name] = e.target.value;
    };

    handleSubmit = () => {
        this.props.handleSubmit(this.values);
    };

    //

    render = () => {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        let email = '';
        return (
            <section>
                <h1>Sign in</h1>
                <ValidatorForm onSubmit={::this.handleSubmit} onChange={::this.handleChange} className="signin-user">
                    <TextValidator
                        floatingLabelText="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <TextField name="userName" floatingLabelText="User name"
                               hintText="User name" fullWidth={true} errorText={this.props.errors.userName}/>
                    <TextField name="password" type="password"
                               floatingLabelText="Password" label="Password" errorText={this.props.errors.password}
                               fullWidth={true}/>
                    <div className="button-row">
                        <RaisedButton label="Sign in" primary={true} type="submit" disabled={submitting}/>
                        <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset}/>
                    </div>
                </ValidatorForm>
            </section>
        )
    }
}

// const SigninForm = createForm({
//     form: 'signin-form',
//     fields: ['userName', 'password']
// })(BasicForm);

