import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';
import SigninForm from './signin-form';
//import {shallow} from 'react-test-renderer';



describe('User Signin form', () => {
    it('should render', () => {
        const form = shallow(<SigninForm></SigninForm>);
        expect(form.text()).toBeDefined();
    });

    // it('should invoke save when clicking save', (done) => {
    //     let myFunc = jest.genMockFunction();
    //
    //     const form = shallow(<SigninForm handleSubmit={myFunc}></SigninForm>);
    //
    //     expect(form.find['onSubmit']).toBeDefined();
    // });
});
