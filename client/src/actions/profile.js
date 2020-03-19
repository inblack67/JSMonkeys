import axios from 'axios'
import { GET_PROFILE, PROFILE_ERROR } from './types'
import M from 'materialize-css/dist/js/materialize.min.js';

export const getMyProfile = () => async dispatch => {
  try {

    const res = await axios('/api/profile/me')
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data.error
    })
  }
}

export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/profile', formData, config);

    M.toast({
      html: res.data.msg
    });

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

    if(!edit)
    {
      history.push('/dashboard');
    }

    
  } catch (err) {

    if(err.response)
    {
      M.toast({
        html: err.response.data.error
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data.error
    })
  }
}