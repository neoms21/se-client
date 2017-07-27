import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, MenuItem, RaisedButton} from 'material-ui';
import './edit-match.scss';
import {Field, stopSubmit} from 'redux-form';
import {SelectField, TextField} from '../../../../components/form';

class EditMatchForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors && nextProps.errors.length > 0) {
            this.props.dispatch(stopSubmit('EditMatchForm', nextProps.errors[0]));
        }
    }

    getErrorClasses = () => {
        let classes = 'submission-errors ';
        return classes + (this.props.generalErrors.length > 0 ? 'visible' : 'hidden');
    };

    renderDatePicker = ({input, label, meta: {touched, error}, ...custom}) =>
        (
            <DatePicker errorText={touched && error} hintText={label}
                        floatingLabelText={label} autoOk={true}
                        {...input}
                        format={v => (v === '' || v === undefined ? new Date() : new Date(v))}
                        value={input.value !== '' ? new Date(input.value) : null}
                        onChange={(event, value) =>
                            input.onChange(value)} {...custom} />
        );

//     const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
//     <DatePicker
//         errorText = {touched && error}
//         {...input}
//         value = {input.value !== ''? new Date(input.value) : null}
//         onChange = {(event, value) => {console.log(value); input.onChange(value)}} />
// )

    getEditText = () => {
        return this.props.matchInfo ? 'Edit' : 'Add';
    };

    render = () => {
        const {
            onAddEdit,
            squads,
            submitting,
            generalErrors
        } = this.props;

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <form className="edit-match-form" onSubmit={this.props.handleSubmit(onAddEdit)}>
                    <div className="top-section">
                        <Field component={SelectField} name="squad" label="Select team"
                               fullWidth={true}
                               onValueChange={(value) => this.props.getAvailablePlayers(value)}>
                            {squads.map(squad =>
                                <MenuItem key={squad._id} value={squad._id} primaryText={squad.name}/>)
                            }
                        </Field>
                        <Field component={::this.renderDatePicker} name="matchDate" label="Match date"/>
                        <Field component={TextField} name="opposition" fullWidth={true}
                               label="Opponents name"/>
                    </div>

                    <div className={::this.getErrorClasses()}>
                        {generalErrors.map((errorMsg, index) =>
                            <span key={index}>{errorMsg}</span>
                        )}
                    </div>

                    <div className="button-row">
                        <RaisedButton label={::this.getEditText()} primary={true} type="submit" disabled={submitting}/>
                    </div>
                </form>
            </section>
        );
    };
}

EditMatchForm.propTypes = {
    handleSubmit: PropTypes.func,
    errors: PropTypes.object
};

export default EditMatchForm;
