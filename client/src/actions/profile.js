import axios from 'axios'
import { GET_PROFILE, PROFILE_ERROR } from './types'

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