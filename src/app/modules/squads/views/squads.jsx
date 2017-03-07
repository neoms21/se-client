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
            <div>
                {this.props.squads.map(function(name, index){
                    return <div key={index}>{name.name}</div>;
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