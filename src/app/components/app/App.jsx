import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../header/header-container';
import {signinUser} from '../../modules/user/actions/user-actions';

class App extends React.Component {

  componentDidMount() {
    // sign user in
    if (this.props.userHash) {
      this.props.dispatch(signinUser(this.props.userHash));
    }
  }

  render() {
    return (
      <div className='container'>
        <HeaderContainer/> {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //console.log('@@@ ', state.user.userHash);

  return {
    // loading: state.ajaxCallsInProgress > 0
    userHash: state.user.userHash
  };
}

export default connect(mapStateToProps)(App);
