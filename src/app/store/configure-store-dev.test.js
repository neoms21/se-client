//import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as userActions from '../modules/user/actions/user-actions';
import configureStore from './configureStore.dev';


describe('Store', function () {

    it('should be configured with empty initial state', function () {
        // arrange
        jest.mock('redux');
        let redux = require('redux');
        redux.createStore = jest.genMockFunction();
        redux.combineReducers = jest.genMockFunction();

        // act
        const store = configureStore({});

        // assert
        expect(store).toBeDefined();

    });
});
