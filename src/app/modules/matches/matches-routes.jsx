import React from 'react';
import { Route } from 'react-router-dom';
import EditMatchPage from './pages/edit-match/edit-match-page';

const matchesRoutes = (
  <div>
    <Route exact path="/creatematch" component={EditMatchPage}/>
    <Route exact path="/editmatch/:id" component={EditMatchPage}/>
  </div>
);

export default matchesRoutes;
