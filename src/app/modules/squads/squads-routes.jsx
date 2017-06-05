import React from 'react';
import { Route } from 'react-router-dom';
import SquadsComponent from './views/squads';
import SquadFormContainer from './views/squadFormContainer';

const squadsRoutes = (
  <div>
    <Route exact path="/squads" component={SquadsComponent}/>
    <Route exact path="/squad" component = { SquadFormContainer } />
    <Route exact path="/squad/:id" component = { SquadFormContainer } />
  </div>
);

export default squadsRoutes;
