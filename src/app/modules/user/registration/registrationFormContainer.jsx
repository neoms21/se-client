import React from 'react';
import RegistrationFormComponent from './registration-form';
import {registerUser} from '../actions/user-actions';
import {connect} from 'react-redux';
import {validateRequiredFields} from '../../../validators/validations'
import emailValidator from '../../../validators/emailValidator';
import lettersValidator from '../../../validators/lettersValidator';
import pwdValidator from '../../../validators/passwordValidator';
import {reduxForm} from 'redux-form'

const validate = values => {

    return Object.assign({},
        passwordMatchValidator(values),
        pwdValidator(values, 'password'),
        emailValidator(values, 'email'),
        lettersValidator(values, 'name'),
        validateRequiredFields(values, ['name', 'email', 'password', 'cnfPassword'])
    );
};

const passwordMatchValidator = (values) => {
    const errors = {};
    if (values['cnfPassword'] !== values['password']) {
        errors['cnfPassword'] = 'Passwords must match';
    }
    return errors;
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (values) => {
            console.log(values);
            const userDetails = {...values};
            dispatch(registerUser(userDetails));
        },

    }
};

class RegistrationFormContainer extends React.Component {

    constructor(props) {
        super(props);
    }
}


RegistrationFormContainer = reduxForm({
    form: 'registrationForm',
    validate: validate,
})(RegistrationFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer)



