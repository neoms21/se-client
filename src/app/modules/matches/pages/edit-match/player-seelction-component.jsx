import React from 'react';
import { Card, CardActions, CardHeader, CardText, IconButton } from 'material-ui';
import './edit-match.scss';
import { Field } from 'redux-form';
import TextField from '../../../../components/form/text-field';
import SelectField from '../../../../components/form/select-field';

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
    };
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

  validatePosition = () => {
  };

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

  getData = (arrayEle, name) => {
  };

  render = () => {
    const {item, availablePlayers, isEditing, deletePlayer, index} = this.props;

    return (
      <div className="player-selection">
          {/*<div className="selection-header">*/}
            {/*<span>Player {item.player}</span>*/}
            {/*<span>Position {item.position}</span>*/}
              {/*<IconButton iconClassName="material-icons" tooltip="Remove" tooltipPosition="top-right"*/}
                          {/*onTouchTap={deletePlayer}>edit_circle</IconButton>*/}
          {/*</div>*/}
          <div className="selection-body">
              <Field component={TextField} name={`pprow_${index}.position`} className="position" value={item.player}
                     label="Starting position"/>
              <Field component={SelectField} name={`pprow_${index}.player`} label="Select player" className="player">
                  {availablePlayers.map(avail => {
                      <MenuItem key={avail.id}
                                value={avail.code}
                                primaryText={avail.description}/>;
                  })}
              </Field>
          </div>

          {/*<CardHeader>*/}
          {/*<span>Player {item.player}</span>*/}
          {/*<span>Position {item.position}</span>*/}
          {/*</CardHeader>*/}


          {/*<IconButton iconClassName="material-icons" tooltip="Done" tooltipPosition="top-right"*/}
          {/*onClick={:: this.closePlayer}>done</IconButton>*/}
          {/*</Card>*/}
          {/*:*/}
          {/*<Chip className="view-player">*/}
          {/*<Avatar className="player-picture" icon={< FontIcon className="material-icons"> perm_identity*/}
          {/*</FontIcon>}/>*/}

          {/*<IconButton iconClassName="material-icons" tooltip="Edit" tooltipPosition="top-right"*/}
          {/*onClick={:: this.editPlayer}>edit_circle</IconButton>*/}
          {/*</Chip>*/}
        </div>
    );
  };
}
