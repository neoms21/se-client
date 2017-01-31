import {createStore, applyMiddleware, combineReducers} from 'redux';
import allReducers from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {routerReducer} from 'react-router-redux';
import userReducer from "../modules/user/reducers/user-reducer";
import {reducer as formReducer} from 'redux-form';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootEpic} from '../epics/rootEpics';

export default function configureStore() {

    const reducers = {
        allReducers,
        ...userReducer,
        routing: routerReducer,
        form: formReducer     // <---- Mounted at 'form'
    };

    // get all reducers
    const rootReducer = combineReducers(reducers);
    // get all epics
    const epicMiddleware = createEpicMiddleware(rootEpic);

    return createStore(rootReducer, applyMiddleware(epicMiddleware));
}
