import React from 'react';
import {connect} from 'react-redux'
import Squad from './squad'
import './squad-list.scss'
import RaisedButton from 'material-ui/RaisedButton';
import * as squadActions from '../actions/squad-actions'

class SquadsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.userId)
            this.props.dispatch(squadActions.fetchSquads(this.props.userId));
    }

    addSquad = () => {
        this.props.history.push('/squad');
    };

    render() {
        return (
            <div className="squad-list">

                <RaisedButton className="squad-list__button"
                              label="Add Squad" primary={true} onClick={this.addSquad}/>
                {this.props.squads.map((squad, index) => {
                    return <Squad key={index} id={squad._id} name={squad.name}/>;
                })}

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        squads: state.squads.squads,
        userId: state.user.currentUser._id
    }
}


export default connect(mapStateToProps)(SquadsComponent)
