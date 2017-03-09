import {createStore, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {routerReducer} from 'react-router-redux';
import squads from "../modules/squads/reducers/squad-reducer";
import userReducer from "../modules/user/reducers/user-reducer";
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootEpic} from '../epics/rootEpics';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

export default function configureStore(initialState) {

    const reducers = {
        rootReducer,
        ...userReducer,
        squads,
        routing: routerReducer
    };

    // get all reducers
    const reducer = combineReducers(reducers);
    // get all epics
    const epicMiddleware = createEpicMiddleware(rootEpic);
    const routingMiddleware = routerMiddleware(browserHistory);

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(
        epicMiddleware, routingMiddleware, reduxImmutableStateInvariant())));
}
