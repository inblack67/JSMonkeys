import { combineReducers } from 'redux'
import auth from './auth'
import profile from './profile'
import post from './post'

export default combineReducers({
  AuthState: auth,
  ProfileState: profile,
  PostState: post
});