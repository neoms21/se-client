import React from 'react';
import { MenuItem, RaisedButton } from 'material-ui';
import './match-edit-selection.scss';
import { Field } from 'redux-form';
import SelectField from '../../../../../components/form/select-field';
import lodash from 'lodash';

const items = [
  <MenuItem key="defender" value='defender' primaryText="Defender"/>,
  <MenuItem key='forward' value='forward' primaryText="Forward"/>,
  <MenuItem key='goalkeeper'value='goalkeeper' primaryText="Goalkeeper"/>,
  <MenuItem key='midfielder' value='midfielder' primaryText="Midfielder"/>,
];

export default class MatchEditSelectionForm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  getEditType = (selectedMatch) => {
    return lodash.isNil(selectedMatch.selectionId) ? 'Create' : 'Edit';
  };

  onClose = () => {
    this.context.history.goBack();
  };

  render = () => {
    const {availablePlayers, positions, selectedMatch, onSave, onClose} = this.props;

    return (
      <div className="match-edit-selection">
        <h1>{this.getEditType(selectedMatch)} selection</h1>
        <div className="match-info">
        </div>
        {availablePlayers.length === 0 ?
          <div className="error">There are no players available for that team
          </div> : <br/>
        }

        <form onSubmit={this.props.handleSubmit(onSave)}>
          <div className="buttons">
            <RaisedButton label="Save" primary={true} />
            <RaisedButton label="Close" onTouchTap={::this.onClose}/>
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
                   label="Starting position">
              {/*{positions.map((position) =>*/}
                {/*<MenuItem key={position.value}*/}
                          {/*value={position.value}*/}
                          {/*primaryText={position.description}/>*/}
              {/*)}*/}
              {items}
            </Field>
          </div>
        </form>
      </div>
    );
  };
}
