import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import headerSass from './HeaderStyle.scss';
import Logged from './logged';
import Login from './login';

export default React.createClass({

  render: function() {
    return (
      <AppBar title='Sports Editor' onLeftIconButtonTouchTap={this.props.handleLeftIconClick}
      iconElementRight={this.props.isSignedIn ? <Logged />
        : <Login handleSignin={this.props.handleSignin} />}>
      </AppBar>
      );
  },

});
