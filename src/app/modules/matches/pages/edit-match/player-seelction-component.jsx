import React from 'react';
import {
    RaisedButton,
    Card,
    IconButton,
    CardHeader,
    CardText,
    Chip,
    MenuItem,
    Avatar,
    FontIcon
} from 'material-ui';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {TextField, SelectField} from '../../../../components/form';

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
        let positionError,
            playerError;

        if (propertyToCheck === undefined || propertyToCheck === 'position') {
            if (this.ourValues.position.length === 0) {
                positionError = 'Position is required';
            } else {
                if (this.ourValues.position.length < 3) {
                    positionError = 'The position must be minimum of 2 letters, numbers or symbols';
                }
            }
        }

        if (propertyToCheck === undefined || propertyToCheck === 'player') {
            if (this.ourValues.player == undefined || this.ourValues.player.length === 0) {
                playerError = 'Player is required';
            }
        }

        return {positionError, playerError};
    };

    validatePosition = () => {};

    handlePositionChange = (event) => {
        this.ourValues.position = event.target.value;
        const errors = this.validate();
        const valuesToUpdate = {
            ...this.ourValues
        };

        this.setState({values: valuesToUpdate, errors: errors});
    };

    handlePlayerChange = (event, key, value) => {
        this.ourValues.player = event.target.value;
        const errors = this.validate();
        const valuesToUpdate = {
            ...this.ourValues
        };

        this.setState({values: valuesToUpdate, errors: errors});
    };

    getData = (arrayEle, name) => {};

    render = () => {
        const {item, availablePlayers, isEditing} = this.props;

        return (
            <div className="player-selection">
                {item.isEditing
                    ? <Card className="edit-player">
                            <Field component={TextField} name={`${item}.position`} className="position" value={item.player} label="Starting position"/>
                            <Field component={SelectField} name={`${item}.player`} label="Select player" className="player">
                                {availablePlayers.map(avail => { < MenuItem key = {
                                        avail.id
                                    }
                                    value = {
                                        avail.code
                                    }
                                    primaryText = {
                                        avail.description
                                    } />
                                })}
                            </Field>
                            <IconButton iconClassName="material-icons" tooltip="Done" tooltipPosition="top-right" onClick={:: this.closePlayer}>done</IconButton>
                        </Card>
                    : <Chip className="view-player">
                        <Avatar className="player-picture" icon={< FontIcon className = "material-icons" > perm_identity < /FontIcon>}/>
                        <span>Player ${item}</span>
                        <span>Position ${item}.position</span>
                        <IconButton iconClassName="material-icons" tooltip="Edit" tooltipPosition="top-right" onClick={:: this.editPlayer}>edit_circle</IconButton>
                    </Chip>
                }
            </div>
        );
    }
}
