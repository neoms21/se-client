import React from 'react';
import {connect} from 'react-redux';
import './match-selections.scss';
import {FontIcon, RaisedButton} from 'material-ui';
import {greenA200, redA200} from 'material-ui/styles/colors';
import {NavLink} from 'react-router-dom';
import {addMatchSelection, deleteMatchSelection} from '../../../actions/match-actions';
import {Observable, from, groupBy} from 'rxjs/Rx';
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
            this.close();
        }
    }

    addSelection = () => {
        this.props.history.push('edit-selection');
    };

    getEditUrl(selectionId) {
        return this.props.history.location.pathname.replace('selection-list', 'edit-selection') + '/' + selectionId;
    }

    close = () => {
        this.props.history.push(this.props.history.location.pathname.replace('selection-list', ''));
    };

    onDelete = (selection) => {
        this.props.onDelete(selection.selectionId);
    };

    render() {
        const {
            selections,
            onSave,
            onDelete,
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
                    const deleteFunc = onDelete.bind(this, selection);

                    return (
                        <div key={index} className="selection-item">
                          <span className="description">
                            {selection.player}
                          </span>
                            <span className="description">{selection.position}</span>

                            <NavLink to={::this.getEditUrl(selection.selectionId)}>
                                <FontIcon style={iconStyles}
                                          className="material-icons"
                                          color={greenA200}>edit</FontIcon>
                            </NavLink>
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
        matchId: state.matches.matchId,
        errors: validate(state.matchSelections.selections)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (values, matchId) => {
            dispatch(addMatchSelection(values, matchId));
            this.close();
        },
        onDelete: (matchSelectionId) => {
            dispatch(deleteMatchSelection(matchSelectionId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchSelectionsListComponent);