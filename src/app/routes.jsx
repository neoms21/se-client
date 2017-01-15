import React from 'react';
import App from './components/app/App';
import Home from './components/Home/Home';
import About from './components/about/About';
import { RegistrationPage } from './modules/user/registration/RegistrationPage';
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/about" component={About} />
    </Route>
);