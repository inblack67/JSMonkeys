import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types"

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case GET_PROFILE: 
    return {
      ...state,
      profile: action.payload,
      loading: false
    }

    case PROFILE_ERROR: 
    return {
      ...state,
      loading: false,
      error: action.payload
    }

    case CLEAR_PROFILE: 
    return {
      ...state,
      profile: null,
      profiles: [],
      repos: [],
    }

    default: return state
  }
}