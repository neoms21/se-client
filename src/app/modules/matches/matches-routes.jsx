import React from 'react';
import { Route } from 'react-router-dom';
import EditMatchPage from './pages/edit-match/edit-match.container';
import MatchListPage from './pages/match-list/match-list-page';
import MatchSelectionListPage from './pages/edit-match/selections/match-selections';

const matchesRoutes = (
  <div>
    <Route exact path="/creatematch" component={EditMatchPage}/>
    <Route exact path="/editmatch/:id" component={EditMatchPage}/>
    <Route exact path="/match-list" component={MatchListPage}/>
    <Route exact path="/match/:id/selection-list" component={MatchSelectionListPage}/>
  </div>
);

export default matchesRoutes;
