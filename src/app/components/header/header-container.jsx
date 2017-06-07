import React from 'react';
import Header from './Header';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser || ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignin: () => {
      dispatch(push('/signin'));
    },
    handleLeftIconClick: () => {
      dispatch(push('/'));
    }
  };
};

class HeaderContainer extends React.Component {

  render() {
    const {handleLeftIconClick, handleSignin} = this.props;

    return (
      <Header handleLeftIconClick={handleLeftIconClick} handleSignin={handleSignin}
              currentUser={this.props.currentUser}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
