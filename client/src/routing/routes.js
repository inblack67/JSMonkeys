import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../components/smart/auth/Login';
import Register from '../components/smart/auth/Register';
import Dashboard from '../components/smart/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const routes = () => {
  return (
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        </Switch>
  )
}

export default routes
