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

    render() {
        return (
            <div className="squad-list">

                <RaisedButton className="squad-list__button"
                              label="Add Squad" primary={true} onClick={()=>{
                                  this.props.router.push('squad');
                }} />
                {this.props.squads.map(function(squad, index){
                    return <Squad key={index} name={squad.name} onClick= {()=>{
                        console.log(squad);
                      }}></Squad>;
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
