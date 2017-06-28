import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import {Route, Switch} from 'react-router-dom';

import SquadsComponent from './modules/squads/views/squads';
import matchesRoutes from './modules/matches/matches-routes';
import userRoutes from './modules/user/user-routes';
import squadsRoutes from './modules/squads/squads-routes';
import playersRoutes from './modules/players/players-routes';
import PrivateRoute from './privateRoute';

export default class Routes extends React.Component {

    render() {

        return (
            <div>
                <Route path="/" component={App}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                {userRoutes}
                {squadsRoutes}
                {matchesRoutes}
                {playersRoutes}
            </div>
        );
    }
}
