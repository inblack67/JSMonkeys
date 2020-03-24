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
import Profiles from '../components/smart/profiles/Profiles';
import Profile from '../components/smart/profile/Profile';
import Posts from '../components/smart/posts/Posts';
import Post from '../components/smart/posts/post/Post';

const routes = () => {
  return (
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        </Switch>
  )
}

export default routes
