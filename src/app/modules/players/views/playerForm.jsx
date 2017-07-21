import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import textField from '../../../elements/textField'
import '../../../core.scss'
import {stopSubmit} from 'redux-form';
import {SelectField, MenuItem} from 'material-ui'
const items = [
    <MenuItem key="def" value='defender' primaryText="Defender"/>,
    <MenuItem key='for' value='forward' primaryText="Forward"/>,
    <MenuItem key="gk" value='goalkeeper' primaryText="Goalkeeper"/>,
    <MenuItem key='mf' value='midfielder' primaryText="Midfielder"/>,
];

const renderSelectField = ({input, label, meta: {touched, error}, children}) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}/>
)

class PlayerForm extends React.Component {


    mySubmit(values) {
        console.log(this.props.match.params.id);
        return this.props.onSave(values, this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    //
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors && nextProps.errors.length > 0) {
            this.props.dispatch(stopSubmit('playerForm', nextProps.errors[0]));
        }
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <form onSubmit={this.props.handleSubmit(this.mySubmit.bind(this)) }>
                <div>
                    <Field name="playerName" component={textField} label="Player Name"/>
                </div>
                <div>
                    <Field name="age" type="number" component={textField} label="Age"/>
                </div>
                <div>
                    <Field name="email" component={textField} label="Email"/>
                </div>
                <div>
                    <Field name="phone" component={textField} label="Phone"/>
                </div>
                <div>

                    <Field name="position" component={renderSelectField} label="Position">
                        {items}
                    </Field>
                </div>
                <div className="button-row">
                    <RaisedButton label="Add" primary={true} type="submit" disabled={submitting}/>
                    <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
                </div>
            </form>
        );
    }
}


export default PlayerForm
