import React from 'react';
import {Route} from 'react-router';
import EditMatchPage from './pages/edit-match/edit-match-page';
import EditMatchForm from './pages/edit-match/edit-match-form';

const matchesRoutes = (
    <Route>
        <Route path="creatematch" component={EditMatchForm}/>
        <Route path="editmatch/:id" component={EditMatchForm}/>
    </Route>
);

export default matchesRoutes;