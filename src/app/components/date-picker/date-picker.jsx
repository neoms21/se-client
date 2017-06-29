import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerComponent extends React.Component {

    openDialog () {
        if (this.props.disabled) return;
        this.refs.input.openDialog();
    }

    render () {
        return (
            <div onTouchTap={this.openDialog.bind(this)}>
                <DatePicker
                    ref='input'
                    fullWidth={this.props.useFullWidth}
                    value={this.props.value}
                    floatingLabelText={this.props.useHint ? null : this.props.label}
                    hintText={this.props.useHint ? this.props.label : null}
                    errorText={this.props.errorMessage}
                    disabled={this.props.disabled}
                    onChange={(_, date) => this.props.onChange(date)}
                    {...this.props.passProps} />
            </div>
        )
    }
}

