import React from 'react';
import {connect} from 'react-redux';
import SquadForm from './squadForm'
import {createSquad} from '../actions/squad-actions'
import {stopSubmit} from 'redux-form';

class SquadFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors.length > 0) {
            //console.log(nextProps.errors);
            this.props.dispatch(stopSubmit('SquadForm', nextProps.errors[0]));
        } else if (nextProps.saved) {
            nextProps.router.push('squads');
        }
    }

    handleSubmit(data) {
        this.props.dispatch(createSquad(data)); // clear form: THIS works
        return false;
    }

    render() {
        return (
            <SquadForm onSubmit={::this.handleSubmit} id={this.props.params.id}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        saved: state.squads.saved,
        errors: state.squads.errors
    }

};

export default connect(mapStateToProps)(SquadFormContainer)