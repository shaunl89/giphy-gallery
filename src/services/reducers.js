import * as types from './types'

export const DEFAULT_STATE = {
  isLoading: false,
  results: [],
  favourites: [],
  error: null,
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_GIFS_REQUEST: return {
      ...state,
      isLoading: true,
      error: null,
    }
    case types.GET_GIFS_SUCCESS: return {
      ...state,
      isLoading: false,
      results: action.payload,
      error: null,
    }
    case types.GET_FAVOURITES_FAILURE: return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
    case types.ADD_FAVOURITES_REQUEST: return {
      ...state,
      isLoading: false,
      error: null,
    }
    case types.ADD_FAVOURITES_SUCCESS: return {
      ...state,
      isLoading: false,
      favourites: [...state.favourites, action.payload],
      error: null,
    }
    case types.ADD_FAVOURITES_FAILURE: return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
    default: return DEFAULT_STATE;
  }
}