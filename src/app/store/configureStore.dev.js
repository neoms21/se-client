import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {routerReducer} from 'react-router-redux';
import userReducer from "../modules/user/reducers/user-reducer";
import {reducer as formReducer} from 'redux-form';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootEpic} from '../epics/rootEpics';

export default function configureStore(initialState) {

    const reducers = {
        rootReducer,
        ...userReducer,
        routing: routerReducer,
        form: formReducer     // <---- Mounted at 'form'
    };

    // get all reducers
    const reducer = combineReducers(reducers);
    // get all epics
    const epicMiddleware = createEpicMiddleware(rootEpic);

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(epicMiddleware,
        reduxImmutableStateInvariant())));
}
