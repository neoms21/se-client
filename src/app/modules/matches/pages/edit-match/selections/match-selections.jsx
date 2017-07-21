import React from 'react';
import { connect } from 'react-redux';
import './match-selections.scss';
import { FontIcon, RaisedButton } from 'material-ui';
import { greenA200, redA200 } from 'material-ui/styles/colors';
import { createMatch, deleteMatchSelection, editMatchSelection } from '../../../actions/match-actions';
import { from, groupBy } from 'rxjs/Rx';
import * as _ from 'lodash';

const iconStyles = {
  marginRight: 10,
  cursor: 'hand'
};

class MatchSelectionsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors && nextProps.errors.length === 0) {

    }
  }

  addSelection = () => {
    this.props.history.push('edit-selection');
  };

  getEditUrl(selectionId) {
    return this.props.history.location.pathname.replace('selection-list', 'edit-selection') + '/' + selectionId;
  }

  close = () => {
    this.props.history.push(`/editmatch/${this.props.matchId}`);
  };

  // onDelete = (selection) => {
  //     this.props.onDelete(selection.selectionId);
  // };

  render() {
    const {
      selections,
      onSave,
      onDelete,
      onEdit,
      errors
    } = this.props;

    return (
      <div className="match-selection-list">
        <h1>Match selections</h1>
        <div className="match-info">
        </div>
        <RaisedButton label="Add" primary={true} className="toolbar-button" onClick={::this.addSelection}/>
        <RaisedButton label="Save" primary={true} className="toolbar-button" onClick={onSave}/>
        <RaisedButton label="Close" primary={false} className="toolbar-button" onClick={::this.close}/>

        {selections.map((selection, index) => {
          const deleteFunc = onDelete.bind(this, selection.selectionId);
          const editFunc = onEdit.bind(this, selection);

          return (
            <div key={index} className="selection-item">
                          <span className="description">
                            {selection.player}
                          </span>
              <span className="description">{selection.position}</span>

              <FontIcon style={iconStyles} onTouchTap={editFunc}
                        className="material-icons"
                        color={greenA200}>edit</FontIcon>
              <FontIcon style={iconStyles} onTouchTap={deleteFunc}
                        className="material-icons"
                        color={redA200}>delete</FontIcon>
            </div>
          );
        })}
        <div className="error-section">
          {errors.map((err, index) => <span key={index} className="error">{err}</span>)}
        </div>
      </div>
    );
  }
}

const validate = (selections) => {
  let errors = [];

  // check for duplicates
  if (selections) {
    const duplicates = _.groupBy(selections, (item) => item.player);

    if (Object.keys(duplicates).length > 0) {
      for (const key in duplicates) {
        if (duplicates[key].length > 1) {
          errors.push(`You have duplicated ${key}`);
        }
      }
    }
  }
  return errors;
};

function mapStateToProps(state) {
  return {
    selections: state.matchSelections.selections || [],
    matchId: state.matches.selectedMatch.matchId,
    errors: validate(state.matchSelections.selections)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (values, matchId) => {
      dispatch(createMatch(values, matchId));
    },
    onDelete: (matchSelectionId) => {
      dispatch(deleteMatchSelection(matchSelectionId));
    },
    onEdit: (selection) => {
      dispatch(editMatchSelection(selection));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchSelectionsListComponent);