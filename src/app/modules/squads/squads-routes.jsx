import React from 'react';
import { Route } from 'react-router-dom';
import SquadsComponent from './views/squads';
import SquadFormContainer from './views/squadFormContainer';
import PrivateRoute from "../../privateRoute";


const squadsRoutes = (
  <div>
    <PrivateRoute exact path="/squads" component={SquadsComponent}/>
    <PrivateRoute exact path="/squad" component = { SquadFormContainer } />
    <PrivateRoute exact path="/squad/:id" component = { SquadFormContainer } />
  </div>
);

export default squadsRoutes;
