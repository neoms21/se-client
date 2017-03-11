import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../header/header-container';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer />
        {this.props.children}
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    // loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
