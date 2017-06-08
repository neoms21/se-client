import React from 'react';
import {TextField} from 'material-ui'

const
    textField = ({input, label, password, meta: {touched, error}, ...custom}) => (
        <TextField hintText={label}
                   type={password ? 'password' : 'text'}
                   floatingLabelText={label}
                   errorText={touched && error}
                   {...input}
                   {...custom}
        />
    );


export default textField