import React from 'react';
import {Route} from 'react-router';
import RegistrationPage from './registration/registration-page';
import SigninPage from './signin/signin-page';


const userRoutes = (
    <Route>
        <Route path="/registration" component={RegistrationPage}/>
        <Route path="/signin" component={SigninPage}/>
    </Route>
);

export default userRoutes;