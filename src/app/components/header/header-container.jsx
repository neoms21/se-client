import React from 'react';
import Header from './Header';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';

const handleLeftIconClick = () => {
    browserHistory.push('/');
};

const handleSignin = () => {
    browserHistory.push('/signin');
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser
    };
};

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header handleLeftIconClick={handleLeftIconClick} handleSignin={handleSignin}
                    currentUser={this.props.currentUser}/>
        );
    }
}

// const headerContainer = React.createClass({
//
// });

export default connect(mapStateToProps)(HeaderContainer);
