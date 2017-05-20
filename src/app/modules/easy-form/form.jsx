import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    
  }

  getChildContext() {
    return {update: this.props.update, reset: this.props.reset, submit: this.submit, values: this.props.values};
  }

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  values: PropTypes.object,
  update: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func
};

Form.childContextTypes = {
  update: PropTypes.func,
  reset: PropTypes.func,
  submit: PropTypes.func,
  values: PropTypes.object
};
