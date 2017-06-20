import React from 'react';
import Player from './player';
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

    editPlayer = (p) =>{
        console.log(p);
    }

    render() {
        return (
            <div className="players-list">

                <RaisedButton className="players-list--button"
                              label="Add Player" primary={true} onClick={this.addPlayer}/>
                <br/>

                {this.props.players.map((p,i) => {
                    return <Player key={i} name={p.playerName} click={this.editPlayer} />;
                })}
            </div>
        );
    }


}
function mapStateToProps(state) {
    return {
        players: state.players.players
    }
}


export default connect(mapStateToProps)(PlayersComponent)
