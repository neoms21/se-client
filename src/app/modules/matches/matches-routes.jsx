import React from 'react';
import {Route} from 'react-router';
import EditMatchPage from './pages/edit-match/edit-match-page';
import EditMatchForm from './pages/edit-match/edit-match-form';

const matchesRoutes = (
    <Route>
        <Route path="creatematch" component={EditMatchPage}/>
        <Route path="editmatch/:id" component={EditMatchPage}/>
    </Route>
);

export default matchesRoutes;
