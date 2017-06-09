import React from 'react';
import { Route } from 'react-router-dom';
import EditMatchPage from './pages/edit-match/edit-match-page';
import MatchListPage from './pages/match-list/match-list-page';

const matchesRoutes = (
  <div>
    <Route exact path="/creatematch" component={EditMatchPage}/>
    <Route exact path="/editmatch/:id" component={EditMatchPage}/>
    <Route exact path="/match-list" component={MatchListPage}/>
  </div>
);

export default matchesRoutes;
