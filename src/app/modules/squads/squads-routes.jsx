import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SquadsComponent from './views/squads';
import SquadFormContainer from './views/squadFormContainer';
import PrivateRoute from "../../privateRoute";


const squadsRoutes = (
    <div>
        <Switch>
            <PrivateRoute exact path="/squads" component={SquadsComponent}/>
            <PrivateRoute exact path="/squad" component={ SquadFormContainer }/>
            <PrivateRoute exact path="/squad/:id" component={ SquadFormContainer }/>
        </Switch>
    </div>
);

export default squadsRoutes;
