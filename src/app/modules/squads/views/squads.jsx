import React from 'react';
import {connect} from 'react-redux'
import Squad from './squad'
import './squad-list.scss'
import RaisedButton from 'material-ui/RaisedButton';
import * as squadActions from '../actions/squad-actions'

class SquadsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(squadActions.fetchSquads());
    }

    addSquad = () => {
        console.log('in add');
        this.props.history.push('/squad');
    };

    goToPlayers = (id) => {
        this.props.history.push('squad/' + id + '/players');
    };

    editSquad = (squad) => {
        this.props.history.push('squad/' + squad._id);
    };

    render() {
        return (
            <div className="squad-list">

                <RaisedButton className="squad-list__button"
                              label="Add Squad" primary={true} onClick={this.addSquad}/>
                {this.props.squads.map((squad, index) => {
                    return <Squad key={index} id={squad._id} name={squad.name} />;
                })}

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        squads: state.squads.squads
    }
}


export default connect(mapStateToProps)(SquadsComponent)
