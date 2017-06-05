import React from 'react';
import Header from './Header';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const handleLeftIconClick = () => {
  push('/');
};

const handleSignin = () => {
  push('/signin');
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser || ''
  };
};

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header handleLeftIconClick={handleLeftIconClick} handleSignin={handleSignin}
                    currentUser={this.props.currentUser} />
    );
  }
}


export default connect(mapStateToProps)(HeaderContainer);
