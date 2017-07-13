import SquadFormContainer from './squadFormContainer'
import React from 'react'
import {expect} from 'chai'
import {mount} from 'enzyme'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe("SquadFormContainer for add operations", () => {
    let store;
    let onSave;
    let subject;
    const initialState = {user: {currentUser: {}}, squads: {squads: []}};
    const mockStore = configureStore();
    beforeEach(() => {
        store = mockStore(initialState);
        onSave = sinon.stub().returns(Promise.resolve());
        const props = {
            onSave,
            match: {params: {id: '123'}},
            user: {currentUser: {_id: '123'}}
        };
        // With redux-form v5, we could do <ContactFormContainer store={store}/>.
        // However, with redux-form v6, the Field component we use is itself
        // connected to the redux store. Therefore, we must put the store into
        // context. To do that, we use <Provider/>.
        subject = mount(<MuiThemeProvider><Provider
            store={store}><SquadFormContainer {...props}/></Provider></MuiThemeProvider>)
    });

    it("instantiated properly ", () => {
        expect(subject).to.not.be.undefined;
    });

    it('should show the error message if focus goes away from squad name element and squad name is empty', () => {
        const props = {
            onSave,
            match: {params: {}},
            user: {currentUser: {_id: 'a1'}}
        };
        subject = mount(<MuiThemeProvider><Provider
            store={store}><SquadFormContainer {...props}/></Provider></MuiThemeProvider>)
        const input = subject.find('input').first();
        input.simulate('blur');
        const errorDiv = subject.findWhere(n => n.text() === 'squadName is Required');
        expect(errorDiv).to.exist;
    });

    it('should show the error message if submit is clicked without filling in the squad name', () => {
        const props = {
            onSave, match: {params: {}}
        };
        subject = mount(<MuiThemeProvider><Provider
            store={store}><SquadFormContainer {...props}/></Provider></MuiThemeProvider>)
        const input = subject.find('input').first();
        input.simulate('submit');
        const errorDiv = subject.findWhere(n => n.text() === 'squadName is Required');
        expect(errorDiv).to.exist;
    })
});