import React from 'react';
import {connect} from 'react-redux'


class PlayersComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
Players page
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
