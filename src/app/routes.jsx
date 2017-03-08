import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import RegistrationPage from './modules/user/registration/RegistrationPage';
import SquadsComponent from './modules/squads/views/squads'
import SquadComponent from './modules/squads/views/createSquadPage';
import { Router, Route, IndexRoute } from 'react-router';
import RegistrationPage from './modules/user/registration/registration-page';
import SigninPage from './modules/user/signin/signin-page';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/squads" component={SquadsComponent}/>
        <Route path="/squad" component={SquadComponent}/>
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/about" component={About} />
    </Route>
);