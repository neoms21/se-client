import React from 'react';
import {connect} from 'react-redux';
import PlayerForm from './playerForm'
import * as playerActions from '../actions/players-actions'


class PlayerPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('leaving player form');
        this.props.dispatch(playerActions.clearSelectedPlayer())
    }

    submit = (values) => {
        // Do something with the form values
        console.log(values);
        this.props.dispatch(playerActions.createPlayer(values));
    };

    handleSubmit(data) {
        let player = Object.assign({}, data, {squadId: this.props.match.params.id});
        console.log('in handle submit' + new Date());

        this.props.dispatch(playerActions.createPlayer(player)); // clear form: THIS works
        //return false;
    }

    render() {
        return (
            <PlayerForm onSubmit={::this.handleSubmit}/>
        );
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        saved: state.squads.saved,
        errors: state.squads.errors
    }

};

export default connect(mapStateToProps)(PlayerPage)
//
// import ContactForm from './ContactForm';
//
// class ContactPage extends React.Component {
//     submit = (values) => {
//         // Do something with the form values
//         console.log(values);
//     }
//     render() {
//         return (
//             <ContactForm onSubmit={this.submit} />
//         );
//     }
// }