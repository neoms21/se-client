import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'material-ui'
import {validateRequiredFields} from '../../../validations'
import '../../../core.scss'
import {connect} from 'react-redux'
import {getSquad} from '../selectors/getSquadSelector'

const validate = values => {
    return validateRequiredFields(values, ['squadName'])
};

const
    renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
        <TextField hintText={label}
                   floatingLabelText={label}
                   errorText={touched && error}
                   {...input}
                   {...custom}
        />
    );

class SquadForm extends React.Component {

    render() {
        const {handleSubmit, submitting, pristine, reset} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="squadName" component={renderTextField} label="Squad Name" {...name} />
                </div>
                <div className="button-row">
                    <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                    <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //return {}
    let squad = getSquad(state, ownProps.id);
    return {
        initialValues: {squadName: squad ? squad.name : ""}
    }
}

SquadForm = reduxForm({
    form: 'SquadForm',
    validate,
    enableReinitialize: true
})(SquadForm);

SquadForm = connect(
    mapStateToProps,
)(SquadForm);

export default SquadForm