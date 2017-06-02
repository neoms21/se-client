import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {routerReducer} from 'react-router-redux';
import {AppContainer} from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import history from './history';
import App from './components/app/App';
import '../assets/fonts/roboto/roboto.scss';
import '../assets/fonts/material/material-icons.css';
import '../assets/styles/global.scss';
import SquadsComponent from './modules/squads/views/squads'
import SquadFormContainer from './modules/squads/views/squadFormContainer'
import PlayerComponent from './modules/players/views/player'
import PlayersComponent from './modules/players/views/players'
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
const store = configureStore(history);
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(createBrowserHistory(), store);

const appRender = () => {
    console.log(history)
    render(
        <div>
            <AppContainer>
                <MuiThemeProvider>
                    <Provider store={store}>
                        <Router history={history}>
                            <div>
                                <Route path="/" component={App}/>
                                <Route path="/squads" component={SquadsComponent}/>
                                <Route exact path="/squad" component={SquadFormContainer}/>
                                <Route exact path="/squad/:id" component={SquadFormContainer}/>

                                <Route path="/squad/:id/players" component={PlayersComponent}/>
                                <Route path="/squad/:id/player" component={PlayerComponent}/>
                            </div>
                        </Router>

                    </Provider>
                </MuiThemeProvider>
            </AppContainer>
        </div>, document.getElementById('app'));
};

appRender(); // run it

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/app/App', () => {
        appRender();
    });
}
