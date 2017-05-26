import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

export default class Text extends React.Component {

  constructor(props) {
    super(props);
  }

  updateValue(value) {
    this.context.update(this.props.name, value);
  }

  onChange(event) {
    this.updateValue(event.target.value);
  }

  render() {
    return (
      <div>
        <TextField hintText={this.props.placeholder} floatingLabelText={this.props.label}
          onChange={::this.onChange}/>
      </div>
    );
  }
} // value={this.context.values[this.props.name]

Text.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
};

Text.contextTypes = {
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};
