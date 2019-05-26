import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Minifigs from '../components/pages/minifigs';
import Auth from '../components/pages/auth';

export const routes = () => (
    <Switch>
        <Route exact path='/minifigs' component={Minifigs}/>
        <Route exact path='/auth' component={Auth}/>
        <Route exact path='/' />
        <Redirect to='/' />
    </Switch>
    
)

export default routes;