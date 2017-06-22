import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './register-user.scss';
import {Field} from 'redux-form'
import {stopSubmit} from 'redux-form';
import {TextField} from 'material-ui'
import {PropTypes} from 'react'

const
    renderTextField = ({input, label, password, meta: {touched, error}, ...custom}) => (
        <TextField hintText={label}
                   type={password ? 'password' : 'text'}
                   floatingLabelText={label}
                   errorText={touched && error}
                   {...input}
                   {...custom}
        />
    );

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false
        };
    }

    submitForm(values) {
        return this.props.onSave(values);
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (nextProps.errors && nextProps.errors.length > 0) {
            this.props.dispatch(stopSubmit('registrationForm', nextProps.errors[0]));
        }
    }

    reset = () => {
        this.refs.form.reset();
    };

    render() {
        return (

            <div>
                <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <div >
                        <Field component={renderTextField} label="Name" name="name"/>
                        <Field component={renderTextField} label="Email" name="email"/>
                        <Field component={renderTextField} label="Password" name="password" password="true"/>
                        <Field component={renderTextField} label="Confirm Password" name="cnfPassword" password="true"/>
                    </div>
                    <div className="button-row">
                        <RaisedButton label="Register" primary={true}
                                      type="submit" disabled={this.props.submitting}/>
                        <RaisedButton label="Clear Values" disabled={this.props.pristine} onClick={this.props.reset}/>
                    </div>
                </form>
            </div>
        )
    }

}


RegistrationForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default RegistrationForm