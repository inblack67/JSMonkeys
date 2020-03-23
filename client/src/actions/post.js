import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';
import { GET_POSTS, POST_ERROR } from './types';


export const getPosts = () => async dispatch => {
  try {
    const res = await axios('api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data.data
    })

  } catch (err) {
    if(err.response || (err.response !== undefined))
    {
      M.toast({
        html: err.response.data.error
      });
    }
    dispatch({
      type: POST_ERROR
    })

  }
}