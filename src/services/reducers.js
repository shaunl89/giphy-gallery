import * as types from './types'
import { reject, isEmpty } from 'lodash'

export const DEFAULT_STATE = {
  isLoading: false,
  results: [],
  noResults: false,
  favourites: [],
  error: null,
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_GIFS_REQUEST: return {
      ...state,
      isLoading: true,
      noResults: false,
      error: null,
    }
    case types.GET_GIFS_SUCCESS: return {
      ...state,
      isLoading: false,
      results: action.payload,
      noResults: isEmpty(action.payload),
      error: null,
    }
    case types.GET_FAVOURITES_FAILURE: return {
      ...state,
      isLoading: false,
      noResults: false,
      error: action.payload,
    }
    case types.ADD_FAVOURITES_REQUEST: return {
      ...state,
      isLoading: true,
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
    case types.REMOVE_FAVOURITES_REQUEST: return {
      ...state,
      isLoading: true,
      error: null,
    }
    case types.REMOVE_FAVOURITES_SUCCESS: return {
      ...state,
      isLoading: false,
      favourites: reject(state.favourites, {id: action.payload.id}),
      error: null,
    }
    case types.REMOVE_FAVOURITES_FAILURE: return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
    default: return DEFAULT_STATE
  }
}