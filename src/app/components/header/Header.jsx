import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './logged';
import Login from './login';
import LeftHandMenu from "./LeftHandMenu";

export default class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({isSignedIn: nextProps.currentUser !== undefined && nextProps.currentUser !== ''});
    };

    render = () => {
        return (
            <AppBar title='Sports Editor' onLeftIconButtonTouchTap={this.props.handleLeftIconClick}
                    iconElementLeft={<LeftHandMenu />}
                    iconElementRight={this.state.isSignedIn
                        ? <Logged currentUser={this.props.currentUser}/>
                        : <Login handleSignin={this.props.handleSignin}/>}>
            </AppBar>
        );
    };
};
