import RaisedButton from 'material-ui/RaisedButton';
import React from 'react'
import {FormsyText} from 'formsy-material-ui';

import {Field, reduxForm} from 'redux-form'
import {TextField} from 'material-ui'
let {Component, PropTypes} = React;


const validate = values => {
    const errors = {};
    const requiredFields = ['squadName'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = field + 'is Required';
        }
    });

    return errors
};

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField hintText={label}
               floatingLabelText={label}
               errorText={touched && error}
               {...input}
               {...custom}
    />
);


const squadForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="squadName" component={renderTextField} label="Squad Name"/>
            </div>
            <div className="button-row">
                <RaisedButton label="Register" primary={true} type="submit" disabled={submitting}/>
                <RaisedButton label="Clear Values" disabled={pristine} onClick={reset}/>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'SquadForm',  // a unique identifier for this form
    validate
})(squadForm)


// export default class CreateSquadForm extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             isSubmitting: false,
//             pristine: true,
//             temp: 'abcd'
//         };
//     }
//
//     static propTypes = {
//         handleSubmit: PropTypes.func
//     };
//
//     handleChange = (e) => {
//         // remove error
//         //this.setState({pristine: false, showError: false});
//         this.setState({
//             pristine: false,
//             squadName: e.target.value,
//             squadNameError: e.target.value.trim().length === 0 ? 'Squad name is required' : ''
//         });
//     };
//
//     reset = () => {
//         this.refs.form.reset();
//     };
//
//     render = () => {
//         const {handleSubmit} = this.props;
//
//         return (
//
//             <form onSubmit={this.props.handleSubmit}>
//                 <TextField ref="position" hintText="Enter the name of the squad" className="position"
//                            floatingLabelText="Squad name" errorText={this.state.squadNameError}
//                            onChange={this.handleChange}
//                 />
//                 <div className="button-row">
//                     <RaisedButton label="Register" primary={true} type="submit" disabled={
//                         this.state.isSubmitting}/>
//                     <RaisedButton label="Clear Values" disabled={this.state.pristine} onClick={this.reset}/>
//                 </div>
//             </form>
//
//         );
//     };
// }

