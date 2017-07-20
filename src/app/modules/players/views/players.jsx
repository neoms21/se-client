import React from 'react';
import Player from './player';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as playerActions from '../actions/players-actions';
import './players-list.scss';

class PlayersComponent extends React.Component {

    constructor(props) {
        super(props);

        // console.log(props.params.id);
    }

    componentWillMount() {
        this.props.dispatch(playerActions.fetchPlayers(this.props.match.params.id));
    }


    addPlayer = () => {
        this.props.history.push(`/squad/${this.props.match.params.id}/player`);
    };

    editPlayer = (p) => {
        this.props.dispatch(playerActions.setSelectedPlayer(p));
        this.props.history.push(`/squad/${this.props.match.params.id}/player`);
    };

    deletePlayer = (player) => {
        this.props.dispatch(playerActions.deletePlayer(player));
        // this.props.history.push(`/squad/${this.props.match.params.id}/player`);
    };

    render() {
        return (
            <div className="players-list">

                <RaisedButton className="players-list__button"
                              label="Add Player" primary={true} onClick={this.addPlayer}/>
                <br/>

                {this.props.players.map((p, i) => {
                    return <Player key={i} name={p.playerName} click={this.editPlayer} player={p}
                                   deletePlayer={this.deletePlayer}/>;
                })}
            </div>
        );
    }


}
function mapStateToProps(state) {
    return {
        players: state.players.players ? state.players.players : []
    }
}


export default connect(mapStateToProps)(PlayersComponent)
