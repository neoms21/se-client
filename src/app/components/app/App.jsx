import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../header/header-container';
import {signinUser, verifyToken} from '../../modules/user/actions/user-actions';

class App extends React.Component {

    componentWillMount() {
        // sign user in
        if (this.props.currentUser) {
            this.props.dispatch(verifyToken(this.props.currentUser.token));
        }
    }


    render() {
        return (
            <div className='container'>
                <HeaderContainer/>
            </div>
        );
    }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps) {
    //console.log('@@@ ', state.user.userHash);

    return {
        // loading: state.ajaxCallsInProgress > 0
        currentUser: state.user.currentUser
    };
}

export default connect(mapStateToProps)(App);
