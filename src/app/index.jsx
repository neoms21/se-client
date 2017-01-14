import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import globalSass from '../assets/styles/global.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

render(
    <div>
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={browserHistory} routes={routes}/>
            </Provider>
        </MuiThemeProvider>
    </div>,
    document.getElementById('app')
);

