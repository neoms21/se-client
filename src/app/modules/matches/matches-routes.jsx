import React from 'react';
import {Switch} from 'react-router-dom';
import PrivateRoute from "../../privateRoute";
import EditMatchPage from './pages/edit-match/edit-match.container';
import MatchListPage from './pages/match-list/match-list-page';
import MatchSelectionListPage from './pages/edit-match/selections/match-selections';
import MatchEditSelectionPage from './pages/edit-match/edit-selection/match-edit-selection.container';

const matchesRoutes = (
  <div>
    <Switch>
      <PrivateRoute exact path="/creatematch" component={EditMatchPage}/>
      <PrivateRoute exact path="/editmatch/:id" component={EditMatchPage}/>
      <PrivateRoute exact path="/match-list" component={MatchListPage}/>
      <PrivateRoute exact path="/match/:matchId/selection-list" component={MatchSelectionListPage}/>
      <PrivateRoute exact path="/match/:matchId/edit-selection/:selectionId?" component={MatchEditSelectionPage}/>
    </Switch>
  </div>
);

export default matchesRoutes;
