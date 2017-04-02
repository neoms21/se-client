import React from 'react';
import {RaisedButton, Card, IconButton, CardHeader, CardText, TextField, SelectField, MenuItem} from 'material-ui';
import './edit-match.scss';

export default class PlayerSelectionComponent extends React.Component {

    ourValues = {
        position: '',
        player: ''
    };

    constructor(props) {
        super(props);

        // set initial
        this.state = {
            isEditing: true,
            values: {}
        }
    }

    editPlayer = () => {
        this.setState({isEditing: true});
    };

    closePlayer = () => {
        this.setState({isEditing: false});
    };

    deletePlayer = (event) => {
        this.closePlayer();
        this.props.deletePlayer(this.props.player.id);
    };

    validate = (propertyToCheck) => {
        let positionError, playerError;

        if(propertyToCheck === undefined || propertyToCheck === 'position') {
            if (this.ourValues.position.length === 0) {
                positionError = 'Position is required';
            } else {
                if (this.ourValues.position.length < 3) {
                    positionError = 'The position must be minimum of 2 letters, numbers or symbols';
                }
            }
        }

        if(propertyToCheck === undefined || propertyToCheck === 'player') {
            if (this.ourValues.player == undefined || this.ourValues.player.length === 0) {
                playerError = 'Player is required';
            }
        }

        return { positionError, playerError};
    };

    handlePositionChange = (event) => {
        this.ourValues.position = event.target.value;
        const errors = this.validate();
        const valuesToUpdate = {...this.ourValues};

        this.setState({
            values: valuesToUpdate,
            errors: errors
        });
    };

    handlePlayerChange = (event, key, value) => {
        this.ourValues.player = event.target.value;
        const errors = this.validate();
        const valuesToUpdate = {...this.ourValues};

        this.setState({
            values: valuesToUpdate,
            errors: errors
        });

    };

    render = () => {
        const {player} = this.props;

        return (
            <div className="player-selection">
                {this.state.isEditing ?
                    <div className="edit-player">
                        <TextField ref="position" hintText="Enter their starting position" className="position"
                                   floatingLabelText="Starting position" errorText={this.state.positionError}
                                   onChange={this.handlePositionChange} value={this.state.position}
                        />
                        <SelectField ref="player" hintText="Select player" className="player"
                                     floatingLabelText="Select player" value={this.state.player}
                                     onChange={this.handlePlayerChange} autoWidth={true}>
                            {this.props.availablePlayers.map(avail => {
                                <MenuItem key={avail.id} value={avail.code} primaryText={avail.description}/>
                            })}
                        </SelectField>

                        <IconButton iconClassName="material-icons" tooltip="Close"
                                    tooltipPosition="top-right" onClick={::this.closePlayer}>close_circle</IconButton>
                        <IconButton iconClassName="material-icons" tooltip="Remove"
                                    tooltipPosition="top-right"
                                    onClick={::this.deletePlayer}>delete_circle</IconButton>
                    </div>
                    :
                    <div className="view-player">
                        <span>Name {player.name}</span>
                        <span>Position {player.position}</span>
                        <IconButton iconClassName="material-icons" tooltip="Edit"
                                    tooltipPosition="top-right"
                                    onClick={::this.editPlayer}>edit_circle</IconButton>
                    </div>
                }
            </div>
        );
    }
}
