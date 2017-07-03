import React from 'react';
import {connect} from 'react-redux';
import {createSquad} from '../actions/squad-actions'
import {validateRequiredFields} from '../../../validators/validations'
import {reduxForm} from 'redux-form'
import SquadFormComponent from './squadForm'
import {push, go} from 'react-router-redux';
import {getSquad} from '../selectors/getSquadSelector';

import {stopSubmit} from 'redux-form';
class SquadFormContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
}

const validate = values => {
    return validateRequiredFields(values, ['squadName'])
};


const mapDispatchToProps = dispatch => {
    return {
        onSave: squadFormValues => {
            dispatch(createSquad(squadFormValues));
        },
        onReceiveProps: (changedProps) => {
            if (changedProps.errors && changedProps.errors.length > 0) {
                dispatch(stopSubmit('squadForm', changedProps.errors[0]));
            }
        }

    }
};

const mapStateToProps = (state, ownProps) => {

    let squad = getSquad(state, ownProps.match.params.id);
    return {
        saved: state.squads.saved,
        errors: state.squads.errors,
        userId: state.user.currentUser._id,
        initialValues: {squadName: squad ? squad.name : ""}
    }

};

SquadFormContainer = reduxForm({
    form: 'squadForm',
    validate: validate,
})(SquadFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(SquadFormContainer)