import React from 'react';
import {Route} from 'react-router-dom';
import PlayerComponent from './views/playerFormContainer';
import PlayersComponent from './views/players';
import PrivateRoute from "../../privateRoute";
import Switch from "react-router-dom/es/Switch";

const playersRoutes = (
    <div>
        <Switch>
            <PrivateRoute exact path="/squad/:id/players" component={ PlayersComponent }/>
            <PrivateRoute exact path="/squad/:id/player" component={ PlayerComponent }/>
        </Switch>
    </div>
);

export default playersRoutes;
