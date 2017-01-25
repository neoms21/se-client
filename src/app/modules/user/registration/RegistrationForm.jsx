
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div><p>kkkkk</p>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username"
                   component={renderTextField} label="Username"
                   validate={[ required, maxLength15 ]} fullWidth={true}
            />
            <Field name="email" type="email"
                   component={renderTextField} label="Email"
                   validate={email}
                   warn={aol} fullWidth={true}
            />
            <Field name="age" type="number"
                   component={renderTextField} label="Age"
                   validate={[ required, number, minValue18 ]}
                   warn={tooOld} fullWidth={true}
            />
            <div>
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} />
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)


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
// export default RegistrationForm;
