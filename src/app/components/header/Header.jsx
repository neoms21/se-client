import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './logged';
import Login from './login';
import LeftHandMenu from "./LeftHandMenu";


const Header = ({handleLeftIconClick, handleSignin, onLogout, currentUser}) => (

    <AppBar title='Sports Editor' onLeftIconButtonTouchTap={handleLeftIconClick}
            iconElementLeft={currentUser ? <LeftHandMenu /> : <div></div>}
            iconElementRight={currentUser
                ? <Logged currentUser={currentUser} logout={onLogout}/>
                : <Login handleSignin={handleSignin}/>}>
    </AppBar>
);


export default Header;
