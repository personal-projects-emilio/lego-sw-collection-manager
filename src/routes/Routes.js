import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Minifigs from '../components/pages/minifigs';

export const routes = () => (
    <Switch>
        <Route exact path='/minifigs' component={Minifigs}/>
        <Route exact path='/' />
        <Redirect to='/' />
    </Switch>
    
)

export default routes;