import React from 'react';
import {IconButton, MenuItem} from 'material-ui';
import '../edit-match-old/edit-match.scss';
import {Field} from 'redux-form';
import TextField from '../../../../../components/form/text-field';
import SelectField from '../../../../../components/form/select-field';

export default class PlayerSelectionComponent extends React.Component {

    ourValues = {
        position: '',
        player: ''
    };

    constructor(props) {
        super(props);

        // set initial
        this.state = {
            isEditing: true
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            isEditing: nextProps.item.isEditing
        });
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

    // validate = (propertyToCheck) => {
    //     let positionError,
    //         playerError;
    //
    //     if (propertyToCheck === undefined || propertyToCheck === 'position') {
    //         if (this.ourValues.position.length === 0) {
    //             positionError = 'Position is required';
    //         } else {
    //             if (this.ourValues.position.length < 3) {
    //                 positionError = 'The position must be minimum of 2 letters, numbers or symbols';
    //             }
    //         }
    //     }
    //
    //     if (propertyToCheck === undefined || propertyToCheck === 'player') {
    //         if (this.ourValues.player == undefined || this.ourValues.player.length === 0) {
    //             playerError = 'Player is required';
    //         }
    //     }
    //
    //     return {positionError, playerError};
    // };

    // handlePositionChange = (event) => {
    //     this.ourValues.position = event.target.value;
    //     const errors = this.validate();
    //     const valuesToUpdate = {
    //         ...this.ourValues
    //     };
    //
    //     this.setState({values: valuesToUpdate, errors: errors});
    // };

    // handlePlayerChange = (event, key, value) => {
    //     this.ourValues.player = event.target.value;
    //     const errors = this.validate();
    //     const valuesToUpdate = {
    //         ...this.ourValues
    //     };
    //
    //     this.setState({values: valuesToUpdate, errors: errors});
    // };

    render = () => {
        const {item, availablePlayers, deletePlayer, member, closePlayer} = this.props;

        return (
            <div>
                {this.state.isEditing ?
                    <div className="selection-body">
                        <Field component={TextField} name={`${member}Position`} className="position"
                               value={item.player}
                               label="Starting position"/>
                        <Field component={SelectField} name={`${member}Player`} label="Select player"
                               className="player">
                            {availablePlayers.map((avail, index) =>
                                <MenuItem key={index}
                                          value={avail.playerName}
                                          primaryText={avail.playerName}/>
                            )}
                        </Field>
                        <div className="buttons">
                            <IconButton className="delete-button" iconClassName="material-icons" tooltip="Remove"
                                        tooltipPosition="top-right"
                                        onTouchTap={deletePlayer}>delete</IconButton>
                            <IconButton className="close-button" iconClassName="material-icons" tooltip="Save"
                                        tooltipPosition="top-right"
                                        onTouchTap={::this.closePlayer}>close</IconButton>
                        </div>
                    </div>
                    :
                    <div className="view-player-position" onClick={::this.editPlayer}>
                        Player {item.Player} Position {item.Position}
                    </div>
                }
            </div>
        );
    };
}
