import React from 'react';
import PropTypes from 'prop-types';
import {RaisedButton, IconButton, MenuItem, TextField, SelectField, DatePicker} from 'material-ui';
import './edit-match.scss';
import PlayerSelectionComponent from "./player-seelction-component";
import {Field, FieldArray, reduxForm} from 'redux-form';
import {DatePickerComponent} from '../../../../components/date-picker/date-picker';

class EditMatchForm extends React.Component {

    constructor(props) {
        super(props);

        this.state =  {

        }
    }

    getErrorClasses = () => {
        let classes = 'submission-errors';
        return classes + (this.state.showError ? 'visible' : 'hidden');
    };

// componentWillReceiveProps = (nextProps) => {
//     this.setState({
//         // set our state to control error display if we get a non field error
//         showError: nextProps.errors.general.length !== 0
//     });
//
//     let fieldErrors = Object.assign({}, nextProps.errors.specific);
//     this.refs.form.updateInputsWithError(fieldErrors);
// };

    // addPlayer = (e) => {
    //     const newPlayer = {id: this.state.nextId, position: '', isEditing: true};
    //     let copyValues = {...this.state.values};
    //     copyValues.players.push(newPlayer);
    //
    //     // now change it
    //     this.setState({
    //         nextId: this.state.nextId + 1,
    //         values: copyValues
    //     })
    // };
    //
    // deletePlayer = (playerId) => {
    //     let copyValues = {...this.state.values};
    //     //let copyOfPlayers = this.state.values.players.concat();
    //     const playerIndexToBeDeleted = copyOfValues.players.findIndex((copyPlayer) => copyPlayer.id === playerId);
    //     if (playerIndexToBeDeleted > -1) {
    //         copyOfPlayers.splice(playerIndexToBeDeleted, 1);
    //     }
    //     // now we have trimmed it, update the state
    //     this.setState({
    //         values: copyValues
    //     });
    // };

    getAvailablePlayers = () => {
      return [];
    }

    reset = () => {
        this.refs.form.reset();
    };

    renderSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => (
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}/>
    );

    renderTextField = props => (
        <TextField hintText={props.label}
                   floatingLabelText={props.label}
                   errorText={props.touched && props.error}
                   {...props.custom}
        />
    );

    renderDatePicker = ({input, label, meta: {touched, error}, ...custom}) => (
        <DatePicker
            errorText={touched && error} hintText={label}
            floatingLabelText={label}
            autoOk={true}
            {...custom}
        />
    );

    renderPlayer = ({input, label, type, meta: {touched, error}}) => (
        <div>
            <PlayerSelectionComponent deletePlayer={::this.deletePlayer}
              availablePlayers={::this.getAvailablePlayers()}/>
        </div>
    );

    renderPlayers({fields, meta: {touched, error, submitFailed}}) {
        return (
            <ul>
                <li>
                    <span>fld {fields.length} </span>
                    <IconButton iconClassName="material-icons" tooltip="Add"
                                tooltipPosition="top-right"
                                onClick={                                    () => {
                                    fields.push();
                                }
                                }
                    >add_circle</IconButton>
                    {/*{(touched || submitFailed) && error && <span>{error}</span>}*/}
                </li>
                {fields.map((member, index) =>
                    <li key={index}>
                        <div>hhhhhhhhhh</div>
                        <button
                            type="button"
                            title="Remove Member"
                            onClick={() => fields.remove(index)}/>
                        {/*<h4>Member #{index + 1}</h4>*/}
                        {/*<Field*/}
                        {/*name={`${member}.row`}*/}
                        {/*component={::this.renderPlayer}*/}
                        {/*label="First Name"/>*/}
                    </li>
                )}
            </ul>
        );
    }

    componentDidMount = () => {
        // const initData = {
        //     "firstName": this.props.currentUser.firstName,
        //     "lastName": this.props.currentUser.lastName,
        //     "sex": this.props.currentUser.sex,
        //     "email": this.props.userEmail,
        //     "phoneNumber": this.props.currentUser.phoneNumber
        // };
        //
        // this.props.initialize(initData);
    };

    render = () => {
        const {pristine, handleSubmit, squads, disabled} = this.props;
        // const generalError = errors === undefined || errors.general === undefined || errors.length === 0
        //     ? '' : errors.general;

        return (
            <section className="edit-match">
                <h1>Create match</h1>
                <form className="edit-match-form"
                      onSubmit={handleSubmit}>
                    <div className="top-section">
                        <Field component={::this.renderSelectField} name="team" label="Select team">
                            {/*{squads.map(squad =>*/}
                                {/*<MenuItem key={squad._id} value={squad._id} primaryText={squad.name}/>)*/}
                            {/*}*/}
                        </Field>
                        <Field component={::this.renderDatePicker} name="matchDate" label="Match date"
                               format={(v) => ((v === '') ? null : v)}/>
                        <Field component={::this.renderTextField} name="opposition" label="Opponents name"/>
                    </div>
                    <h3 className="players-section">Players</h3>
                    <FieldArray name="playersPositions" component={::this.renderPlayers} disabled={disabled}/>

                    {/*<div className={getErrorClasses()}>*/}
                    {/*<span>{generalError}</span>*/}
                    {/*</div>*/}
                    <div className="button-row">
                        <RaisedButton label="Save" primary={true} type="submit"/>
                        <RaisedButton label="Clear Values" disabled={pristine} onClick={::this.reset}/>
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

const validate = values => {
    const errors = {};
    const requiredFields = ['team', 'matchDate', 'opposition'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });

    return errors;
};

export default reduxForm({
    form: 'EditMatchForm',  // a unique identifier for this form
    validate
})(EditMatchForm);
