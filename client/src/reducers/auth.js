import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types'

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
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false // done loading
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