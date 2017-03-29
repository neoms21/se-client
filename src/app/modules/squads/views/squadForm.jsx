import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {FormsyText} from 'formsy-material-ui';
import Formsy from 'formsy-react';
import {TextField} from 'material-ui'
let {Component, PropTypes} = React;


export default class CreateSquadForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            pristine: true
        };
    }

    static propTypes = {
        handleSubmit: PropTypes.func
    };

    errorMessages = {
        squadNameError: 'Please provide your squad name (at least 8 letters)'
    };

    handleChange = (e) => {
        console.log(e.target.value);
        // remove error
        //this.setState({pristine: false, showError: false});
        this.setState({
            pristine: false,
            squadName: e.target.value,
            squadNameError: e.target.value.trim().length === 0 ? 'Squad name is required' : ''
        });
    };

    reset = () => {
        this.refs.form.reset();
    };

    render = () => {
        const {handleSubmit} = this.props;

        return (

            <form onSubmit={handleSubmit}>
                <TextField ref="position" hintText="Enter the name of the squad" className="position"
                           floatingLabelText="Squad name" errorText={this.state.squadNameError}
                           onChange={this.handleChange}
                />
                <span>{this.state.pristine} - adas</span>
                <div className="button-row">
                    <RaisedButton label="Register" primary={true} type="submit" disabled={this.state.isSubmitting}/>
                    <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
                </div>
            </form>

        );
    };
}

