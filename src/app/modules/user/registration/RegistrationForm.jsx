import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './register-user.scss';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const RegistrationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="register-user">
            <Field name="name"
                   component={renderTextField} label="Name" fullWidth={true}
            />
            <Field name="email" type="email"
                   component={renderTextField} label="Email" fullWidth={true}
            />
            <Field name="passwordType" type="checkbox" component="input" />
            <Field name="password" type="password"
                   component={renderTextField} label="Password"
                   fullWidth={true}
            />
            <Field name="passwordConfirm" type="password"
                   component={renderTextField} label="Confirm password"
                   fullWidth={true}
            />
            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} />
            </div>
        </form>
    )
};


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
export default RegistrationForm;
