import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';
import SignInForm from './signin-form';
//import {shallow} from 'react-test-renderer';


describe('User Signin form', () => {
    it('should render', () => {
        const handleSubmit  = function () {

        };
        const form = shallow(<SignInForm handleSubmit={handleSubmit}></SignInForm>);
        expect(form.text()).toBeDefined();
    });

    // it('should invoke save when clicking save', (done) => {
    //     let myFunc = jest.genMockFunction();
    //
    //     const form = shallow(<SignInForm handleSubmit={myFunc}></SignInForm>);
    //
    //     expect(form.find['onSubmit']).toBeDefined();
    // });
});
