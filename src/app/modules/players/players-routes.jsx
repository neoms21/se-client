import React from 'react';
import { Route } from 'react-router-dom';
import PlayerComponent from './views/playerFormContainer';
import PlayersComponent from './views/players';

const playersRoutes = (
  <div>
    <Route exact path = "/squad/:id/players" component = { PlayersComponent } />
    <Route exact path = "/squad/:id/player" component = { PlayerComponent } />
  </div>
);

export default playersRoutes;
