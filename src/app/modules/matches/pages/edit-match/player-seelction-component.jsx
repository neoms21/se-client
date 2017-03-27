import React from 'react';
import {FormsyText, FormsySelect, FormsyDate} from 'formsy-material-ui';
import {RaisedButton, Card, IconButton, CardHeader, CardText} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import Formsy from 'formsy-react';

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

    editPlayer = (player) => {
        this.setState({isEditing: true});
        //player.isEditing = true;
    };

    closePlayer = (player) => {
        // const playerIndex = this.props.player.findIndex(pl => pl.id === playerId);
        // if (playerIndex > -1) {
        //     const playersCopy = this.props.players.concat();
        //     playersCopy[playerIndex].isEditing = false;
        //     this.setState({
        //         players: playersCopy
        //     });
        // }
        this.setState({isEditing: false});
    };

    render = () => {
        const {player} = this.props;

        return (
            <div>
                { this.state.isEditing ?
                    <div style={{display: 'inline-block'}}>
                        <FormsyText
                            name="position"
                            validations="minLength:2" style={{display: 'inline-block'}}
                            validationError={this.errorMessages.positionError}
                            required updateImmediately
                            hintText="Enter their starting position"
                            floatingLabelText="Starting position"
                            onChange={this.handleChange}
                        />
                        <FormsySelect
                            name="player"
                            required style={{display: 'inline-block', verticalAlign: 'top'}}
                            hintText="Select player"
                            floatingLabelText="Select player"
                            onChange={this.handleChange}/>
                        <IconButton iconClassName="material-icons" tooltip="Close"
                                    tooltipPosition="top-right" onClick={::this.closePlayer}
                        >close_circle</IconButton>
                    </div>
                    :
                    <div>
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
