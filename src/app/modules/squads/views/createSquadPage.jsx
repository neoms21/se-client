import React from 'react';
import {connect} from 'react-redux';
import SquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'
import {getSquad} from '../selectors/getSquadSelector'


class CreateSquadPage extends React.Component {
    constructor(props) {
        super(props);

    }

    handleSubmit(data) {
        // event.preventDefault();
        // this should be the data, but is an event
        console.log('Submission received!', data);
        this.props.dispatch(createSquad(data)); // clear form: THIS works
        return false;
    }

    render(){
                return (
            <SquadForm onSubmit={this.handleSubmit.bind(this)}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let squad = getSquad(state, '58bf301b616e2a1e4a07724e');
    return {
        //error: state.squads.error,
        values: {squadName: 'abcd'},
        squadName: squad ? squad.name : ""
    }

};

export default connect(mapStateToProps)(CreateSquadPage)