import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as userActions from '../redux/actions/userActions';



describe('Store', function() {
    it('Should handle creating users', function() {
        // arrange
        const store = createStore(rootReducer, {});
        const user = {
            name: "Jack Wilder"
        };

        // act
        const action = userActions.createUserSuccess(user);
        store.dispatch(action);

        // assert
        const actual = store.getState().register[0];
        const expected = {
            name: "Jack Wilder"
        };

        expect(actual).toEqual(expected);
    });
});
