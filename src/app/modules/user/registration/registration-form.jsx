import React from 'react';
import {FormsyText} from 'formsy-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import './register-user.scss';

export default class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true,
            showError: false
        };
    }

    errorMessages = {
        wordsError: "Please only use letters",
        emailError: 'Please provide your email',
        passwordError: 'The password must be minimum of 8 letters, numbers or symbols',
        passwordConfirmError: 'The passwords must match',
    };

    handleChange = (e) => {
        // remove error
        this.setState({pristine: false, showError: false});
    };

    getErrorClasses = () => {
        let classes = 'submission-errors ';
        return classes + (this.state.showError ? 'visible' : 'hidden');
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            // set our state to control error display if we get a non field error
            showError: nextProps.errors.general.length !== 0
        });

        let fieldErrors = Object.assign({}, nextProps.errors.specific);
        this.refs.form.updateInputsWithError(fieldErrors);
    };

    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        const {errors, handleSubmit} = this.props;
        const generalError = errors === undefined || errors.general === undefined || errors.length === 0
            ? '' : errors[0];

        return (
            <Formsy.Form ref="form"
                         onValidSubmit={handleSubmit}
                         className="register-user">
                <FormsyText
                    name="name"
                    validations="isWords"
                    validationError={this.errorMessages.wordsError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your name"
                    floatingLabelText="Name"
                    onChange={this.handleChange}
                />
                <FormsyText
                    name="email"
                    validations="isEmail"
                    validationError={this.errorMessages.emailError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your email"
                    floatingLabelText="Email"
                    onChange={this.handleChange}
                />
                <FormsyText
                    name="password"
                    validations="minLength:8"
                    validationError={this.errorMessages.passwordError}
                    required updateImmediately fullWidth={true}
                    hintText="Enter your password (at least 8 characters)"
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                />
                <FormsyText
                    name="passwordConfirm"
                    validations="equalsField:password"
                    validationError={this.errorMessages.passwordConfirmError}
                    required updateImmediately fullWidth={true}
                    hintText="Confirm your password"
                    floatingLabelText="Confirm password"
                    onChange={this.handleChange}
                />
                <div className={::this.getErrorClasses()}>
                    <span>{generalError}</span>
                </div>
                <div className="button-row">
                    <RaisedButton label="Register" primary={true} type="submit"/>
                    <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                </div>
            </Formsy.Form>
        );
    }
}

// RegistrationForm.propTypes = {
//     handleSubmit: React.PropTypes.func,
//     error: React.PropTypes.string
// };

// const RegistrationForm = (props) => (
//
//     // handleHideShowPassword: function () {
//     //     // this.setState({
//     //     //     passwordType: this.state.passwordType === 'text' ? 'password' : 'text'
//     //     // })
//     // },
//
//     // getInitialState() {
//     //     return {
//     //         passwordType: 'text'
//     //     }
//     // },
//
//     // getError(fieldName) {
//     //     switch(fieldName) {
//     //         case "name":
//     //             console.log(this.refs)
//     //              return (this.refs.name !== undefined && this.refs.name.length === 0) ? "Name is required" : "";
//     //     }
//     // },
//
//     <section className="register-user">
//         <h1>Register new user</h1>
//         <form>
//             <TextField type='text' floatingLabelText='Please enter your name - required' name='name'
//                        fullWidth={true} onChange={props.handleChangeName}
//                        maxLength={120} errorText={props.getError('name')}/>
//             <TextField type='email' floatingLabelText='Email is required, and will be used as your user name'
//                        name='email' fullWidth={true}
//                        onChange={props.handleChangeName('email')}
//                        maxLength={120} errorText={props.getError('email')}/>
//             <Checkbox label=" Hide password"
//                       checked={props.passwordType === 'password'}
//                       onChange={props.handleChangePasswordType}/>
//             <TextField type='text'
//                        floatingLabelText='Please enter your password - it needs to be at least 8 characters, and is required'
//                        name='password' fullWidth={true}
//                        onChange={props.handleChangePassword}
//                        maxLength={120} errorText={props.getError('password')}/>
//             <TextField type='text' floatingLabelText='Please re-enter your password - it needs to match'
//                        name='passwordConfirm' fullWidth={true}
//                        onChange={props.handleChangePasswordConfirm}
//                        maxLength={120} errorText={props.getError('passwordConfirm')}/>
//
//             <div className="error">
//                 {props.errors.map(err => <div>{err}</div>)}
//             </div>
//
//             <div className="button-row">
//                 <RaisedButton label="Register" primary={true} onClick={props.onSaveRegistration} />
//             </div>
//         </form>
//     </section>
// );
//
// RegistrationForm.propTypes = {
//     handleChangePasswordConfirm: React.PropTypes.func.isRequired,
//     handleChangePasswordType: React.PropTypes.func.isRequired,
//     passwordType: React.PropTypes.string,
//     handleChangeName: React.PropTypes.func.isRequired,
//     getError: React.PropTypes.func.isRequired,
//     errors: React.PropTypes.array,
//     onSaveRegistration: React.PropTypes.func.isRequired
// };


// // Decorate the form component
// // RegistrationForm = reduxForm({
// //     form: 'Registration' // a unique name for this form
// // })(RegistrationForm);
//
//export default RegistrationForm;
