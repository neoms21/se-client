// import React from 'react';
// import {connect} from 'react-redux';
// import PlayerForm from './playerForm'
//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         //error: state.squads.error,
//         values: {},
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleSubmit: (values) => {
//             console.log(values);
//
//         },
//         validate: (values) => {
//             const errors = {};
//             if (!values.name) {
//                 errors.name = 'Required'
//             }
//             return errors;
//         }
//     }
// };
//
// // do a redux subscription
// export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
//


import React from 'react';
import {connect} from 'react-redux';
import PlayerForm from './playerForm'
import {createPlayer} from '../actions/players-actions'


class PlayerPage extends React.Component {

    constructor(props) {
        super(props);
    }

    submit = (values) => {
        // Do something with the form values
        console.log(values);
        this.props.dispatch(createPlayer(values));
    };

    handleSubmit(data) {
        let player = Object.assign({}, data, {squadId: this.props.match.params.id});
        console.log('in handle submit' + new Date());

        this.props.dispatch(createPlayer(player)); // clear form: THIS works
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