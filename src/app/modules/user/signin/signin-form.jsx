import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import PropTypes from 'prop-types';
import './signin.scss';
import textField from '../../../elements/textField'
import {Field} from 'redux-form'
import './signin.scss';

class SignInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false
        };
    }

    handleChange = (e) => {
        // remove error
        this.setState({pristine: false, showError: false});
    };

    getErrorClasses = () => {
        let classes = 'submission-errors ';
        return classes + (this.state.showError ? 'visible' : 'hidden');
    };

    submitForm(values) {
        return this.props.onSave(values);
    }

    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <div >
                        <Field component={textField} label="User Name" name="userName"/>
                        <br/>
                        <Field component={textField} label="Password" name="password" password="true"/>
                    </div>
                    <div className='submission-errors hidden'>
                        <span>{this.props.errorMessage}</span>
                    </div>
                    <div className="button-row">
                        <RaisedButton label="Sign in" primary={true} type="submit" disabled={this.state.isSubmitting}/>
                        <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                    </div>
                </form>
            </div>
        );
    }
}


SignInForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default SignInForm
