import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST } from './types';


export const getPosts = () => async dispatch => {
  try {
    const res = await axios('api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data.data
    })

  } catch (err) {

    dispatch({
      type: POST_ERROR
    })

  }
}

export const likePost = (postId) => async dispatch => {
  try {

    const res = await axios.put(`api/posts/like/${postId}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data.data }
    })

  } catch (err) {

    if(err.response !== undefined)
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

export const dislikePost = (postId) => async dispatch => {
  try {

    const res = await axios.put(`api/posts/unlike/${postId}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data.data }
    })

  } catch (err) {

    if(err.response !== undefined)
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

export const deletePost = (postId) => async dispatch => {
  try {

    const res = await axios.delete(`/api/posts/${postId}`)

    dispatch({
      type: DELETE_POST,
      payload: {postId, posts: res.data.data}
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
    }

    dispatch({
      type: POST_ERROR
    })

  }
}

export const addPost = (formData) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {

    const res = await axios.post('/api/posts', formData, config)

    dispatch({
      type: ADD_POST,
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
    }

    dispatch({
      type: POST_ERROR
    })

  }
}