import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from './RegistrationForm';


describe('User Registration form', () => {
    it('should render', () => {
        const form = shallow(<RegistrationForm></RegistrationForm>);
        expect(form.text()).toBeDefined();
    });

    it('should invoke save when clicking save', () => {
        let myFunc = jest.genMockFunction();
        //var myFuncSpy = spyOn(myFunc);
        const form = shallow(<RegistrationForm onSaveRegistration={myFunc}></RegistrationForm>);

        form.find('RaisedButton').simulate('click');
        //expect(form.props.onSaveRegistration).toBeDefined();
        console.log(JSON.stringify(form.props));
        expect(myFunc).toBeCalled();
    });
});
