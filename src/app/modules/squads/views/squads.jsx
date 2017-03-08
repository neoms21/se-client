import React from 'react';
import {connect} from 'react-redux'
import {squad} from './squad'
import * as squadActions from '../actions/squad-actions'

class SquadsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(squadActions.fetchSquads());
        // console.log(props);
        // this.state = { /* initial state, this is ES6 syntax (classes) */ };
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div>

                {this.props.squads.map(function(name, index){
                    return <squad key={index}>{name.name}</squad>;
                })}
                <input type="button" value="Add Squad" />
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