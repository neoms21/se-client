import React from 'react';
import {connect} from 'react-redux'
import './squads.scss'

class SquadComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // this.state = { /* initial state, this is ES6 syntax (classes) */ };
    }

    render() {
        return (
            <div className="squad-container">
                {this.props.name}
            </div>
        );
    }

}


export default SquadComponent