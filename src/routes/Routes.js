import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Minifigs from '../components/pages/minifigs';
import Auth from '../components/pages/auth';
import Frames from '../components/pages/frames';

export const routes = () => (
    <Switch>
        <Route exact path='/frames' component={Frames}/>
        <Route exact path='/minifigs' component={Minifigs}/>
        <Route exact path='/auth' component={Auth}/>
        <Route exact path='/' />
        <Redirect to='/' />
    </Switch>
    
)

export default routes;