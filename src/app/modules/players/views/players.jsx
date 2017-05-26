import React from 'react';
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

class PlayersComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.params.id);
    }


    addPlayer = () => {
        this.props.router.push(`squad/${this.props.params.id}/player`);
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