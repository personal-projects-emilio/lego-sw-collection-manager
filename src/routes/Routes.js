import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Minifigs from '../components/pages/minifigs';
import Form from '../components/pages/form';
export const routes = () => (
    <Switch>
        <Route exact path='/minifigs' component={Minifigs}/>
        <Route exact path='/' component={Form} />
        <Redirect to='/' />
    </Switch>
    
)

export default routes;