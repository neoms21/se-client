import React from 'react';
import { TextField } from 'material-ui';

const renderTextField = (props) => {
  const {
    label,
    meta: {
      touched,
      error
    },
    input, custom
  } = props;

  return (
    <TextField hintText={label} floatingLabelText={label}
               errorText={touched && error} {...input} {...custom}/>
  );
};

export default renderTextField;
