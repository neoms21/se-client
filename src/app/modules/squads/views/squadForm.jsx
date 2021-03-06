import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field} from 'redux-form'
import {TextField} from 'material-ui'
import '../../../core.scss'

import{Component, PropTypes} from 'react'


const
    renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
        <TextField hintText={label}
                   floatingLabelText={label}
                   errorText={touched && error}
                   {...input}
                   {...custom}
        />
    );

class SquadForm extends Component {

    mySubmit(values) {
        return this.props.onSave(Object.assign({}, values, {userId: this.props.userId}));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.props.onReceiveProps(nextProps)
    }

    render() {
        return (

            <div>
                <form onSubmit={this.props.handleSubmit(this.mySubmit.bind(this))}>
                    <div >
                        <Field name="squadName" component={renderTextField}
                               label="Squad Name" {...name} />
                    </div>
                    <div className="button-row">
                        <RaisedButton label="Register" primary={true}
                                      type="submit" disabled={this.props.submitting}/>
                        <RaisedButton label="Clear Values" disabled={this.props.pristine} onClick={this.props.reset}/>
                    </div>
                </form>
            </div>
        )
    }
}

SquadForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default SquadForm


