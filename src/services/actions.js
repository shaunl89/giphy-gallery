import * as types from './types'

export function getGIFS(searchValue) {
  return {
    type: types.GET_GIFS_REQUEST,
    payload: {
      searchValue,
    },
  }
}

export function addFavourite(item) {
  return {
    type: types.ADD_FAVOURITES_REQUEST,
    payload: {
      item,
    },
  }
}

export function removeFavourite(item) {
  return {
    type: types.REMOVE_FAVOURITES_REQUEST,
    payload: {
      item,
    },
  }
}