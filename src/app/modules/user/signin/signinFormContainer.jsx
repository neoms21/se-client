import {signinUser} from '../actions/user-actions';
import React from 'react';
import SignInFormComponent from './signin-form';
import {connect} from 'react-redux';
import {validateRequiredFields} from '../../../validators/validations'
import emailValidator from '../../../validators/emailValidator';
import {reduxForm} from 'redux-form'


const validate = values => {

    return Object.assign({},
        emailValidator(values, 'userName'),
        validateRequiredFields(values, ['userName', 'password'])
    );
};


function mapStateToProps(state, ownProps) {
    return {
        errorMessage: state.user.errorMessage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (values) => {
            let userDetails = {userName: values.userName, password: values.password};
            dispatch(signinUser(userDetails));
        },
    }
};

class SignInFormContainer extends React.Component {

    constructor(props) {
        super(props);
    }
}


SignInFormContainer = reduxForm({
    form: 'signInForm',
    validate: validate,
})(SignInFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer)




