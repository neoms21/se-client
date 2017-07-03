import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import squads from "../modules/squads/reducers/squad-reducer";
import players from "../modules/players/reducers/players.reducer";
import user from "../modules/user/reducers/user-reducer";
import matches from '../modules/matches/reducers/match-reducer';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootEpic} from '../epics/rootEpics';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import persistState from 'redux-localstorage';

export default function configureStore(history, initialState) {

    const reducers = {
        user,
        squads,
        matches,
        players,
        router: routerReducer,
        form: formReducer
    };

    // get all reducers
    const reducer = combineReducers(reducers);
    // get all epics
    const epicMiddleware = createEpicMiddleware(rootEpic);
    // Build the middleware for intercepting and dispatching navigation actions
    const routingMiddleware = routerMiddleware(history);

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(epicMiddleware, routingMiddleware,
        reduxImmutableStateInvariant()), persistState(['user'])));

    // return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(epicMiddleware, routingMiddleware,
    //     reduxImmutableStateInvariant())));
}
