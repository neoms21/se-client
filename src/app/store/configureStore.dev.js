import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {routerReducer} from 'react-router-redux';
import squads from "../modules/squads/reducers/squad-reducer";
import user from "../modules/user/reducers/user-reducer";
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootEpic} from '../epics/rootEpics';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import persistState from 'redux-localstorage';

import { reducer as formReducer } from 'redux-form';
export default function configureStore(initialState) {

    const reducers = {
        user,
        squads,
        form: formReducer,
        routing: routerReducer
    };

    // get all reducers
    const reducer = combineReducers(reducers);
    // get all epics
    const epicMiddleware = createEpicMiddleware(rootEpic);
    const routingMiddleware = routerMiddleware(browserHistory);

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(
        epicMiddleware, routingMiddleware, reduxImmutableStateInvariant()),
        persistState()));
}
