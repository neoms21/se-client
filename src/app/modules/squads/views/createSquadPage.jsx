import React from 'react';
import {connect} from 'react-redux';
import CreateSquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'
import {getSquad} from '../selectors/getSquadSelector'

const mapStateToProps = (state, ownProps) => {
    let squad = getSquad(state, '58bf301b616e2a1e4a07724e');
    return {
        //error: state.squads.error,
        values: {squadName: 'abcd'},
        squadName: squad ? squad.name : ""
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (values) => {
            console.log(values);
            let squadDetails = {squadName: values.squadName};
            dispatch(createSquad(squadDetails));
        },
        validate: (values) => {
            const errors = {};
            if (!values.squadName) {
                errors.squadName = 'Required'
            }
            return errors;
        }
    }
};

// do a redux subscription
export default connect(mapStateToProps, mapDispatchToProps)(CreateSquadForm);

class CreateSquadPage extends React.Component {


}

export default CreateSquadPage

// class SquadsComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.props.dispatch(squadActions.fetchSquads());
//     }
//
//     addSquad = () => {
//         this.props.router.push('squad');
//     };
//
//     goToPlayers = (id) => {
//
//         this.props.router.push('squad/' + id + '/players');
//     };
//
//     editSquad = (squad) => {
//         console.log(squad);
//     };
//
//     render() {
//         return (
//             <div className="squad-list">
//
//                 <RaisedButton className="squad-list__button"
//                               label="Add Squad" primary={true} onClick={this.addSquad}/>
//                 {this.props.squads.map((squad, index) => {
//                     return <Squad key={index} name={squad.name} onSquadClick={() => this.goToPlayers(squad._id)}
//                                   onEditClick={() => this.editSquad(squad)}/>;
//                 })}
//
//             </div>
//         );
//     }
//
//
// }
// function mapStateToProps(state) {
//     return {
//         squads: state.squads.squads
//     }
// }
//
//
// export default connect(mapStateToProps)(SquadsComponent)
