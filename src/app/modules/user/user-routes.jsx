import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationPage from './registration/registration-page';
import SigninPage from './signin/signin-page';


const userRoutes = (
  <div>
    <Route exact path="/registration" component={RegistrationPage}/>
    <Route exact path="/signin" component={SigninPage}/>
  </div>
);

export default userRoutes;
