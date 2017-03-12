import React from 'react';
import Header from './Header';
import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

const handleLeftIconClick = () => {
    browserHistory.push('/');
};

const handleSignin = () => {
    browserHistory.push('/signin');
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser || ''
    };
};

const headerContainer = React.createClass({
    render: function () {
        return (
            <Header handleLeftIconClick={handleLeftIconClick} handleSignin={handleSignin}
                    currentUser={this.props.currentUser}/>
        );
    },
});

export default connect(mapStateToProps)(headerContainer);
