import axios from 'axios'
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, GET_PROFILES, GET_REPOS } from './types'
import M from 'materialize-css/dist/js/materialize.min.js';

export const getMyProfile = () => async dispatch => {
  try {

    const res = await axios('/api/profile/me')
    dispatch({
      type: GET_PROFILE,
      payload: res.data.profile
    })
  
  } catch (err) {
    if(err.response){
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
    else{
      dispatch({
        type: PROFILE_ERROR,
        payload: 'Server Error'
      })
    }

  }
}

export const getProfiles = () => async dispatch => {
  try {

    const res = await axios('/api/profile')

    dispatch({
      type: GET_PROFILES,
      payload: res.data.data
    })
  
  } catch (err) {
    if(err.response){
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
    else{
      dispatch({
        type: PROFILE_ERROR,
        payload: 'Server Error'
      })
    }

  }
}

export const getProfileById = (userId) => async dispatch => {
  try {

    const res = await axios(`/api/profile/user/${userId}`)

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    })
  
  } catch (err) {
    if(err.response){
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
    else{
      dispatch({
        type: PROFILE_ERROR,
        payload: 'Server Error'
      })
    }

  }
}

export const getRepos = (username) => async dispatch => {
  try {

    const res = await axios(`/api/profile/github/${username}`)

    dispatch({
      type: GET_REPOS,
      payload: res.data.repos
    })
  
  } catch (err) {
    if(err.response){
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
    else{
      dispatch({
        type: PROFILE_ERROR,
        payload: 'Server Error'
      })
    }

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
      payload: res.data.data
    })

    if(!edit)
    {
      history.push('/dashboard');
    }

    
  } catch (err) {

    if(err.response !== undefined)
    {
      M.toast({
        html: err.response.data.error
      });

      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })

    }
  }
}

export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.put('/api/profile/experience', formData, config);

    M.toast({
      html: res.data.msg
    });

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data.data
    })

    history.push('/dashboard');
    
  } catch (err) {

    if(err.response !== undefined)
    {
      M.toast({
        html: err.response.data.error
      });

      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
  }
}


export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.put('/api/profile/education', formData, config);

    M.toast({
      html: res.data.msg
    });

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data.data
    })

    history.push('/dashboard');
    
  } catch (err) {

    if(err.response !== undefined)
    {
      M.toast({
        html: err.response.data.error
      });

      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
  }
}

export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data.data
    })

    M.toast({
      html: res.data.msg
    });

  } catch (err) {
    if(err.response !== undefined)
    {
      M.toast({
        html: err.response.data.error
      });

      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.error
      })
    }
  }
  }

  export const deleteEducation = id => async dispatch => {
    try {
      const res = await axios.delete(`/api/profile/education/${id}`)
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data.data
      })
  
      M.toast({
        html: res.data.msg
      });
  
    } catch (err) {
      if(err.response !== undefined)
      {
        M.toast({
          html: err.response.data.error
        });
  
        dispatch({
          type: PROFILE_ERROR,
          payload: err.response.data.error
        })
      }
    }
    }