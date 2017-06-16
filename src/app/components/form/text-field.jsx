import React from 'react';
import { TextField } from 'material-ui';

const renderTextField = (props) => {
  return (
    <TextField hintText={props.label} floatingLabelText={props.label}
    errorText={props.meta.error} {...props.input} {...props.custom}/>
  );
}

export default renderTextField;
