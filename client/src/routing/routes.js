import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../components/smart/auth/Login';
import Register from '../components/smart/auth/Register';
import Dashboard from '../components/smart/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import CreateProfile from '../components/smart/profile/CreateProfile';
import EditProfile from '../components/smart/profile/EditProfile';
import AddExperience from '../components/smart/profile/AddExperience';
import AddEducation from '../components/smart/profile/AddEducation';

const routes = () => {
  return (
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        </Switch>
  )
}

export default routes
