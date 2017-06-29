import React from 'react';
import { MenuItem } from 'material-ui';
import '../edit-match-old/edit-match.scss';
import { Field } from 'redux-form';
import SelectField from '../../../../../components/form/select-field';

export default class MatchEditSelectionComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  close = () => {
    // go back to list page
    push('../selection-list')
  };

  render = () => {
    const {item, availablePlayers, positions, deletePlayer, save} = this.props;

    return (
      <div className="match-edit-selection">
        <h1>{this.getEditType()} selection</h1>
        <div className="match-info">
        </div>
        <div className="buttons">
          <RaisedButton label="Save" primary={true} onTouchTap={save}/>
          <RaisedButton label="Close" onTouchTap={this.close}/>
        </div>
        <div className="selection-body">
          <Field component={SelectField} name="Player" label="Select player"
                 className="player">
            {availablePlayers.map((avail, index) =>
              <MenuItem key={index}
                        value={avail.playerName}
                        primaryText={avail.playerName}/>
            )}
          </Field>
          <Field component={SelectField} name="Position" className="position"
                 value={item.player}
                 label="Starting position">
            {positions.map((position) =>
              <MenuItem key={position.value}
                        value={position.value}
                        primaryText={position.description}/>
            )}
          </Field>

        </div>
      </div>
    );
  };
}
