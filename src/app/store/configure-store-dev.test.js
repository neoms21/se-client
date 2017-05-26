

describe('Store', function () {
let redux, reduxLocalStorage;


    beforeEach(() => {
        jest.mock('redux-localstorage');
        jest.mock('redux');
        redux = require('redux');
        redux.createStore = jest.genMockFunction();
        redux.combineReducers = jest.genMockFunction();
        reduxLocalStorage = require('redux-localstorage');
        //reduxLocalStorage.persistState = jest.fn().mockReturnValue(1);
    });

    it('should create store & combine reducers', function () {
        // arrange
        // const configureStore = require('./configureStore.dev');
        //
        // // act
        // const store = configureStore({});
        //
        // // assert
        // expect(redux.createStore).toHaveBeenCalled();
        // expect(redux.combineReducers).toHaveBeenCalled();
        // expect(reduxLocalStorage.persistState).toHaveBeenCalled();
    });
});
