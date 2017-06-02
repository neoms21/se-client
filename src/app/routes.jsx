import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import RegistrationPage from './modules/user/registration/registration-page';
import SquadsComponent from './modules/squads/views/squads'
import {Router, Route, IndexRoute} from 'react-router';
import SigninPage from './modules/user/signin/signin-page';
import SquadFormContainer from './modules/squads/views/squadFormContainer'
import PlayerComponent from './modules/players/views/player'
import PlayersComponent from './modules/players/views/players'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/squads" component={SquadsComponent}/>
        <Route path="/squad" component={SquadFormContainer}/>
        <Route path="/squad/:id" component={SquadFormContainer}/>
        <Route path="/squad/:id/players" component={PlayersComponent}/>
        <Route path="/squad/:id/player" component={PlayerComponent}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/about" component={About}/>
    </Route>
);