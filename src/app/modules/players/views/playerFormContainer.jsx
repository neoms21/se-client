import React from 'react';
import {connect} from 'react-redux';
import PlayerFormComponent from './playerForm'
import * as playerActions from '../actions/players-actions'
import {reduxForm} from 'redux-form'
import {validateRequiredFields} from '../../../validators/validations'
import emailValidator from "../../../validators/emailValidator";
import phoneNumberValidator from "../../../validators/phoneNumberValidator";

const validate = values => {
    let errors = {};
    let requiredErrors = validateRequiredFields(values, ['playerName', 'age']); // find our how to combine with other validations
    let emailErrors = emailValidator (values, ['email']); // find our how to combine with other validations
    let phNumberErrors = phoneNumberValidator (values, ['phone']); // find our how to combine with other validations
    let ageError = {};
    if (values.age && values.age < 8) {
        ageError.age = "Player's age must be greater than 8";
    }

    return Object.assign({}, requiredErrors, ageError, emailErrors, phNumberErrors);
};

class PlayerFormContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('leaving player form');
        this.props.dispatch(playerActions.clearSelectedPlayer())
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        initialValues: state.players.selectedPlayer
    }

};
const mapDispatchToProps = dispatch => {
    return {
        onSave: (values, squadId) => {
            let player = Object.assign({}, values, {squadId: squadId});
            dispatch(playerActions.createPlayer(player));
        }
    }
};


PlayerFormContainer = reduxForm({
    form: 'playerForm',
    validate: validate,
})(PlayerFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerFormContainer)