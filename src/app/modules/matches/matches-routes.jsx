import React from 'react';
import { Route } from 'react-router-dom';
import EditMatchPage from './pages/edit-match/edit-match-page';
import EditMatchForm from './pages/edit-match/edit-match-form';
import PrivateRoute from "../../privateRoute";

const matchesRoutes = (
  <div>
    <PrivateRoute exact path="creatematch" component={EditMatchPage}/>
    <PrivateRoute exact path="editmatch/:id" component={EditMatchPage}/>
  </div>
);

export default matchesRoutes;
