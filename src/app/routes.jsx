import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import RegistrationPage from './modules/user/registration/RegistrationPage';
import SquadsComponent from './modules/squads/views/squads'
import {Router, Route, IndexRoute} from 'react-router';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/about" component={About}/>
        <Route path="/squads" component={SquadsComponent}/>
    </Route>
);