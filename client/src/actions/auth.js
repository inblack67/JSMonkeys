import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';
import { REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE, ACCOUNT_DELETED, PROFILE_ERROR } from './types'
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {

  if(localStorage.token)
  {
    setAuthToken(localStorage.token);
  }

  try {
    
    const res = await axios('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });

  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }

}

export const register = (formData) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/users', formData, config);

    M.toast({
      html: res.data.msg
    });
  
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
  
  } catch (err) {

    if(err.response !== undefined)
    {
      M.toast({
        html: err.response.data.error
      });
    }


    dispatch({
      type: REGISTER_FAIL
    });
  }

}

export const login = (formData) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
  
  } catch (err) {

    if(err.response)
    {
      M.toast({
        html: err.response.data.error
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }

}

export const logout = () => dispatch => {

  dispatch({
    type: CLEAR_PROFILE,
  });

  dispatch({
    type: LOGOUT,
  });
}

export const deprecate = () => async dispatch => {

  if(window.confirm('Are you sure? This action cannot be undone.'))
  {
    try {
      const res = axios.delete('/api/profile');
      console.log(res.data);
  
      dispatch({
        type: CLEAR_PROFILE
      })
      dispatch({
        type: ACCOUNT_DELETED
      })
  
      M.toast({ html: 'Account Deleted Successfuly' })
    
    } catch (err) {
      if(err.response)
      {
        M.toast({
          html: err.response.data.error
        });
      }
  
      dispatch({
        type: PROFILE_ERROR
      })
  
    }
  
  }

}