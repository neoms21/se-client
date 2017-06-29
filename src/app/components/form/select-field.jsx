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
    errorText={error}
    {...input}
    onChange={(event, index, value) => {
      input.onChange(value);
      if (custom.onValueChange) custom.onValueChange(value);
    }}
    children={children}
  />
);

export default renderSelectField;
