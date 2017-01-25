import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import userReducer from "../modules/user/reducers/user-reducer";
import { reducer as formReducer } from 'redux-form'

export default function configureStore(initialState) {

    const reducers = {
        rootReducer,
        ...userReducer,
        routing: routerReducer,
        form: formReducer     // <---- Mounted at 'form'
    };

    const reducer = combineReducers(reducers)
    return createStore(reducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
