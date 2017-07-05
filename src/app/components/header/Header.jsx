import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './logged';
import Login from './login';
import LeftHandMenu from "./LeftHandMenu";


const Header = ({handleLeftIconClick, handleSignin, onLogout, currentUser}) => (

    <AppBar title='Sports Editor' onLeftIconButtonTouchTap={handleLeftIconClick}
            iconElementLeft={currentUser ? <LeftHandMenu /> : ''}
            iconElementRight={currentUser
                ? <Logged currentUser={currentUser} logout={onLogout}/>
                : <Login handleSignin={handleSignin}/>}>
    </AppBar>
);


export default Header;
//
// export default class HeaderComponent extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render = () => {
//         console.log(this.props);
//         return (
//             <AppBar title='Sports Editor' onLeftIconButtonTouchTap={this.props.handleLeftIconClick}
//                     iconElementLeft={<LeftHandMenu />}
//                     iconElementRight={this.props.currentUser
//                         ? <Logged currentUser={this.props.currentUser} logout={this.props.onLogout}/>
//                         : <Login handleSignin={this.props.handleSignin}/>}>
//             </AppBar>
//         );
//     };
// };
