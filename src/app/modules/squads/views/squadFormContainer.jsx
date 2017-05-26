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

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors && nextProps.errors.length > 0) {
            //console.log(nextProps.errors);
            this.props.dispatch(stopSubmit('SquadForm', nextProps.errors[0]));
        } else if (nextProps.saved) {
            nextProps.router.push('squads');
        }
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
    console.log(state);
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