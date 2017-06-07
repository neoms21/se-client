import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as playerActions from '../actions/players-actions';

class PlayersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(playerActions.fetchPlayers(this.props.match.params.id));
       // console.log(props.params.id);
    }


    addPlayer = () => {
        this.props.history.push(`/squad/${this.props.match.params.id}/player`);
    };

    render() {
        return (
            <div className="players-list">

                <RaisedButton className="players-list--button"
                              label="Add Player" primary={true} onClick={this.addPlayer}/>
            </div>
        );
    }


}
function mapStateToProps(state) {
    return {
        squads: state.squads.squads
    }
}


export default connect(mapStateToProps)(PlayersComponent)
