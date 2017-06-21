import React from 'react';
import { SelectField } from 'material-ui';

const renderSelectField = ({
                             input,
                             label,
                             meta: {touched, error, visited},
                             children,
                             ...custom
                           }) => (
  <SelectField
    floatingLabelText={label}
    errorText={visited && error}
    {...input}
    onChange={(event, index, value) => {
      input.onChange(value);
      if (custom.onValueChange) custom.onValueChange(value);
    }}
    onBlur={() =>
      touched = true}
    children={children}
  />
);

export default renderSelectField;
