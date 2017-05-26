import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import EditMatchForm from './edit-match-form';


describe('Edit match form', () => {
  it('should render', () => {
    const form = shallow(<EditMatchForm></EditMatchForm>);
    expect(form.text()).toBeDefined();
  });

  it('should invoke save when clicking save', () => {
    let myFunc = jest.genMockFunction();
    //var myFuncSpy = spyOn(myFunc);
    const form = shallow(<EditMatchForm handleSubmit={myFunc}></EditMatchForm>);

    setTimeout(() => {
      form.simulate('submit');
      expect(myFunc).toBeCalled();
    }, 100);
  });
});
