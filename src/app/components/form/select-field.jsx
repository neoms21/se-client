import React from 'react';
import { SelectField } from 'material-ui';

const renderSelectField = ({
                             input,
                             label,
                             meta: {
                               touched,
                               error
                             },
                             children,
                             ...custom
                           }) => (
  <SelectField
    floatingLabelText={label}
    errorText={error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
);

export default renderSelectField;
