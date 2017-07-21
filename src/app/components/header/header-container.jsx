import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {signOutUser} from "../../modules/user/actions/user-actions";


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            console.log('logging out');
            dispatch(signOutUser());
            dispatch(push('/signin'));
        },

        handleSignin: () => {
            dispatch(push('/signin'));
        },
        handleLeftIconClick: () => {
            dispatch(push('/'));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
