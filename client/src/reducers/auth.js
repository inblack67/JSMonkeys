import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, CLEAR_PROFILE, ACCOUNT_DELETED } from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: 
    localStorage.setItem('token', action.payload)
    return {
      ...state,
      isAuthenticated: true,
      loading: false
    }

    case REGISTER_FAIL: 
    case AUTH_ERROR: 
    case LOGIN_FAIL:
    case LOGOUT:
    case CLEAR_PROFILE:
    case ACCOUNT_DELETED:
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false, // done loading
      user: null
    }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      }

    default: return state
  }
}