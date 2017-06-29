import React from 'react';
import { connect } from 'react-redux';
import './match-selections.scss';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { greenA200 } from 'material-ui/styles/colors';
import { NavLink } from 'react-router-dom';

const iconStyles = {
  marginRight: 10,
  cursor: 'hand'
};

class MatchSelectionsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  addSelection = () => {
    this.props.history.push('edit-selection');
  };

  render() {

    const {
      selections,
      matchId
    } = this.props;

    let editUrl = `match/${matchId}/edit-selection`;

    return (
      <div className="match-selection-list">
        <h1>Match selections</h1>
        <div className="match-info">
        </div>
        <RaisedButton label="Add" primary={true} onClick={this.addSelection}/>
        {selections.map((selection, index) => {
          return (
            <div className="selection-item">
              <span className="description">
          {selection.name}
        </span>
              <NavLink to={editUrl}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={greenA200}>edit</FontIcon>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selections: state.matches.selections || [],
    matchId: state.matches.matchId
  };
}

export default connect(mapStateToProps)(MatchSelectionsListComponent);