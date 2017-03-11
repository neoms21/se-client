import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

export default class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton label='Sign in' onClick={this.props.handleSignin} />
      );
  }
}
