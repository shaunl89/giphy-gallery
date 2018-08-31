import * as types from './types';

export function getGIFS(searchValue) {
  console.log('searchValue in actions', searchValue);
  return {
    type: types.GET_GIFS_REQUEST,
    payload: {
      searchValue,
    },
  };
}