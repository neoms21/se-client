import MatchEditSelectionContainer from './match-edit-selection.container';
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import {reducer as formReducer} from 'redux-form';
import matchSelectionReducer from '../../../reducers/match-selections-reducer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import playersReducer from '../../../../players/reducers/players-reducer';
import matchesReducer from '../../../reducers/match-reducer';
import configureStore from 'redux-mock-store';

describe("EditMatchSelectionContainer", () => {
    let store;
    let onSave;
    let subject;
    const middlewares = [];
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
        // store = createStore(combineReducers({
        //     form: formReducer,
        //     matchSelections: matchSelectionReducer,
        //     players: playersReducer,
        //     matches: matchesReducer
        // }));
        store = mockStore({matchSelections: {errors: []}, players: {players: []}, matches: {selectedMatch: {}}});
        //onSave = sinon.stub().returns(Promise.resolve());
        const props = {};
        subject = mount(<MuiThemeProvider><Provider
            store={store}><MatchEditSelectionContainer {...props}/></Provider></MuiThemeProvider>);

        //state = {players: {players: []}, matches: {}};
    });

    it("instantiated properly ", () => {
        expect(subject).to.not.be.undefined;
    });

    describe('mapStateToProps', () => {
        it('should return object with correct properties', () => {

            const result = subject.props;
            expect(result.availablePlayers).to.be.defined;
            expect(result.positions).to.be.defined;
            expect(result.selectedMatch).to.be.defined;
            expect(result.errors).to.be.defined;
            expect(result.generalErrors).to.be.defined;
        })
    });

    describe('mapDispatchToProps', () => {
        it('should return object with correct properties', () => {

            const result = subject.props;
            expect(result.onSave).to.be.defined;
        });

        // it('should call onSave when save button is clicked', () => {
        //     const container = subject.find('MatchEditSelectionContainer');
        //     const spy = sinon.stub(container.props.onSave);
        //     console.log('~~~~ ', container.props)
        //     const input = subject.find('button[type="submit"]').first();
        //     input.simulate('click');
        //     expect(spy.called).to.equal(true);
        // });
    });

    describe('validate', () => {
        // it('should return errors for empty array', () => {
        //     const container = subject.find('MatchEditSelectionContainer');
        //     const result = container.validate([]);
        //     expect(result).to.be.defined;
        // });
    });
});