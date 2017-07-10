import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import createHistory from 'history/createBrowserHistory';

import '../assets/fonts/roboto/roboto.scss';
import '../assets/fonts/material/material-icons.css';
import '../assets/styles/global.scss';
import App from './components/app/App';

const history = createHistory();
const store = configureStore(history);
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(createBrowserHistory(), store);

const appRender = () => {
  render(
    <div>
      <AppContainer>
        <MuiThemeProvider>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </Provider>
        </MuiThemeProvider>
      </AppContainer>
    </div>,
    document.getElementById('app'));
};

appRender(App); // run it

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app/App', () => {
    appRender(App);
  });
}
