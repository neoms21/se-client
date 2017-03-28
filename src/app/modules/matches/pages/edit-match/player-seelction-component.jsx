import React from 'react';
//import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, Card, IconButton, CardHeader, CardText, TextField, SelectField} from 'material-ui';
import Formsy from 'formsy-react';
import './edit-match.scss';

export default class PlayerSelectionComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: true
        }
    }

    errorMessages = {
        wordsError: "Please only use letters",
        whenError: 'Please specify date of match',
        emailError: 'Please provide your email',
        positionError: 'The position must be minimum of 2 letters, numbers or symbols',
        passwordConfirmError: 'The passwords must match',
        oppositionError: 'Please provide opposition name'
    };

    editPlayer = () => {
        this.setState({isEditing: true});
    };

    closePlayer = () => {
        this.setState({isEditing: false});
    };

    deletePlayer = () => {
        this.closePlayer();
        this.props.deletePlayer();
    };

    handlePositionChange = (event) => {
        this.setState({
            position: event.target.value,
            positionError: event.target.value.length === 0 ? 'Position is required' : ''
        });
    };

    handlePlayerChange = (event, key, value) => {
        this.setState({player: value});
    };

    render = () => {
        const {player} = this.props;

        return (
            <div className="player-selection">
                {this.state.isEditing ?
                    <div className="player-selection">
                        <TextField ref="position" hintText="Enter their starting position" className="position"
                                   floatingLabelText="Starting position" errorText={this.state.positionError}
                                   onChange={this.handlePositionChange}
                        />
                        <SelectField ref="player" hintText="Select player" className="player"
                                     floatingLabelText="Select player" value={this.state.player}
                                     onChange={this.handlePlayerChange}/>

                        <IconButton iconClassName="material-icons" tooltip="Close"
                                    tooltipPosition="top-right" onClick={::this.closePlayer}
                        >close_circle</IconButton>
                        <IconButton iconClassName="material-icons" tooltip="Remove"
                                    tooltipPosition="top-right" onClick={::this.deletePlayer}
                        >delete_circle</IconButton>
                    </div>
                    :
                    <div>
                        <span>Name {player.name}</span>
                        <span>Position {player.position}</span>
                        <IconButton iconClassName="material-icons" tooltip="Edit"
                                    tooltipPosition="top-right"
                                    onClick={::this.editPlayer}>edit_circle</IconButton>
                    </div>
                }   </div>
        );
    }
}
