import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import {Field} from 'redux-form';
import {createForm} from 'redux-form-utils';
let {Component, PropTypes} = React;
import './signin.scss';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

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

    // errorText={this.props.errors['userName']}

    render = () => {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <section>
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit(this.values)} onChange={this.handleChange} className="signin-user">
                    <TextField name="userName" floatingLabelText="User name"
                               hintText="User name" fullWidth={true}/>
                    <TextField name="password" type="password"
                               floatingLabelText="Password" label="Password"
                               fullWidth={true}/>
                    <div className="button-row">
                        <RaisedButton label="Sign in" primary={true} type="submit" disabled={submitting}/>
                        <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset}/>
                    </div>
                </form>
            </section>
        )
    }
}

// const SigninForm = createForm({
//     form: 'signin-form',
//     fields: ['userName', 'password']
// })(BasicForm);

