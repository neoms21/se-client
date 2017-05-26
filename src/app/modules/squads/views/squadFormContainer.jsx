import React from 'react';
import {connect} from 'react-redux';
import SquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'

import {validateRequiredFields} from '../../../validations'
import {reduxForm} from 'redux-form'
import SquadFormComponent from './squadForm'

import {getSquad} from '../selectors/getSquadSelector'
class SquadFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }
}

const validate = values => {
    return validateRequiredFields(values, ['squadName'])
};


const mapDispatchToProps = dispatch => {
    return {
        onSave: squadFormValues => {
            console.log('Now running onSave action');
            dispatch(createSquad(squadFormValues));
        }
    }
};

const mapStateToProps = (state, ownProps) => {

    let squad = getSquad(state, ownProps.routeParams.id);
    return {
        saved: state.squads.saved,
        errors: state.squads.errors,
        initialValues: {squadName: squad ? squad.name : ""}
    }

};

SquadFormContainer = reduxForm({
    form: 'squadForm',
    validate: validate
})(SquadFormComponent);

export default connect(mapStateToProps, mapDispatchToProps)(SquadFormContainer)