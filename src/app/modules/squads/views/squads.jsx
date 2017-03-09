import React from 'react';
import {connect} from 'react-redux'
import Squad from './squad'
import * as squadActions from '../actions/squad-actions'

class SquadsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(squadActions.fetchSquads());
    }
    //
    // static contextTypes = {
    //     router: React.PropTypes.object.isRequired
    // }

    render() {
        return (
            <div>
                {this.props.squads.map(function(squad, index){
                    return <Squad key={index} name={squad.name} onClick= {()=>{
                        console.log(squad);
                      }}></Squad>;
                })}

                <input type="button" className="button" value="Add Squad" />
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
