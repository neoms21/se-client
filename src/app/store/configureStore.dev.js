import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import userReducer from "../modules/user/reducers/userReducer";

export default function configureStore(initialState) {
    return createStore(
        combineReducers({...userReducer, routing: routerReducer}),
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
