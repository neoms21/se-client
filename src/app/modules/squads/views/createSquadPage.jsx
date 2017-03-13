import React from 'react';
import {connect} from 'react-redux';
import {Observable} from 'rxjs';
import CreateSquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'
import {getSquad} from '../selectors/getSquadSelector'

const mapStateToProps = (state, ownProps) => {
    return {
        //error: state.squads.error,
        values: {squadName: 'abcd'},
        squadName: getSquad(state, '58bf301b616e2a1e4a07724e').name
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            console.log(values);
            let squadDetails = {squadName: values.squadName};
            dispatch(createSquad(squadDetails));
        },
        validate: (values) => {
            const errors = {};
            if (!values.squadName) {
                errors.squadName = 'Required'
            }
            return errors;
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(CreateSquadForm);