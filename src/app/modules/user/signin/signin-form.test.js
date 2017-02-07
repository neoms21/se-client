import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';
import SigninForm from './signin-form';


describe('User Signin form', () => {
    it('should render', () => {
        const form = shallow(<SigninForm></SigninForm>);
        expect(form.text()).toBeDefined();
    });

    it('should invoke save when clicking save', () => {
        let myFunc = jest.genMockFunction();

        const form = shallow(<SigninForm handleSubmit={myFunc}></SigninForm>);

        form.simulate('submit');
        expect(myFunc).toBeCalled();
    });
});
