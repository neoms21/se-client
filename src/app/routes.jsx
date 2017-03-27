import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import {Router, Route, IndexRoute} from 'react-router';
import userRoutes from './modules/user/user-routes';
import matchRoutes from './modules/matches/matches-routes';
import SquadsComponent from './modules/squads/views/squads'
import CreateSquadComponent from './modules/squads/views/createSquadPage'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        {userRoutes}
        {matchRoutes}
        <Route path="/squads" component={SquadsComponent}/>
        <Route path="/squad" component={CreateSquadComponent}/>
        <Route path="/about" component={About} />
    </Route>
);