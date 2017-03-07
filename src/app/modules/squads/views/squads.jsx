import React from 'react';
import {connect} from 'react-redux'
import squads from '../reducers/squad-reducer'
import * as squadActions from '../actions/squad-actions'

class SquadsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(squadActions.fetchSquads());
        // console.log(props);
        // this.state = { /* initial state, this is ES6 syntax (classes) */ };
    }

    render() {
        return (
            <div>Squad Component</div>
        );
    }

}
function mapStateToProps(state) {
    return {
        squads: state.squads
    }
}

export default connect(mapStateToProps)(SquadsComponent)