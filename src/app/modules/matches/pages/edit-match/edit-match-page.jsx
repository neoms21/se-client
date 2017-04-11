import React from 'react';
import EditMatchForm from './edit-match-form';
import {registerMatch} from '../../actions/match-actions';
import {connect} from 'react-redux';
import {ServerService} from '../../../../services/server-service';
import {sendQuery} from '../../../../services/server-service';


function mapStateToProps(state, ownProps) {
    return {
        errors: state.matches.errors,
        squads: state.squads.squads
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            dispatch(registerMatch(values));
        }
    }
};

// now connect with redux
export default connect(mapStateToProps, mapDispatchToProps)(EditMatchForm);

// // do a redux subscription
// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//     form: 'EditMatchForm',  // a unique identifier for this form
//     validate
// })(EditMatchForm));


