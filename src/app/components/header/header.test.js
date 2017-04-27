import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow} from 'enzyme';
import Header from './Header';


describe('Header view', () => {
    it('should render', () => {
        const form = shallow(<Header></Header>);
        expect(form.text()).toBeDefined();
    });

    it('should show logged when user set correctly', () => {
        const myUser = {userName: 'hhhh', password: 'ppppp'};
        const view = shallow(<Header currentUser={myUser}></Header>);

        setTimeout(() => {
            const rightMenu = view.find('iconElementRight').first();
            expect(rightMenu.text()).toBe('Logged');
        });
    });

    it('should show login component when user not set', () => {

        const view = shallow(<Header currentUser={undefined}></Header>);

        setTimeout(() => {
            const rightMenu = view.find('iconElementRight').first();
            expect(rightMenu.text()).toBe('Login');
        });
    });
});
