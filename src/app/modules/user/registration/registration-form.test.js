import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
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
        const form = shallow(<RegistrationForm handleSubmit={myFunc}></RegistrationForm>);

        form.simulate('submit');
        //form.find('RaisedButton').last().simulate('click');
        //expect(form.props.onSaveRegistration).toBeDefined();
        expect(myFunc).toBeCalled();
    });
});
