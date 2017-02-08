import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import {globalSass} from '../assets/styles/global.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = configureStore();
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <div>
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
         </MuiThemeProvider>
    </div>,
    document.getElementById('app')
);

