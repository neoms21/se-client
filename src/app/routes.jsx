import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import SquadsComponent from './modules/squads/views/squads'
import {Router, Route, IndexRoute} from 'react-router';
import SigninPage from './modules/user/signin/signin-page';
import CreateSquadComponent from './modules/squads/views/createSquadPage';
import PlayerComponent from './modules/players/views/player';
import PlayersComponent from './modules/players/views/players';
import userRoutes from './modules/user/user-routes';
import matchRoutes from './modules/matches/matches-routes';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        {userRoutes}
        {matchRoutes}
        <Route path="/squads" component={SquadsComponent}/>
        <Route path="/squad" component={CreateSquadComponent}/>
        <Route path="/squad/:id" component={CreateSquadComponent}/>
        <Route path="/squad/:id/players" component={PlayersComponent}/>
        <Route path="/squad/:id/player" component={PlayerComponent}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/about" component={About}/>
    </Route>
);