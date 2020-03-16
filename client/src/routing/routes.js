import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../components/smart/auth/Login';
import Register from '../components/smart/auth/Register';
import NotFound from '../components/dumb/NotFound';

const routes = () => {
  return (
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
        </Switch>
  )
}

export default routes
