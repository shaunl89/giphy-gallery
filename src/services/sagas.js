import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { NotificationManager } from 'react-notifications'
import Axios from 'axios'
import * as types from './types'
import { API } from '../config'

const fetchAPI = (value) => {
  return Axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    url: `${API}search?q=${value}&api_key=${process.env.REACT_APP_API_KEY}&limit=24`,
  })
}

function* getGIFS(action) {
  try {
    const response = yield call(
      fetchAPI,
      action.payload.searchValue,
    )
    yield put ({
      type: types.GET_GIFS_SUCCESS,
      payload: response.data.data,
    })
  } catch (error) {
    console.error(error)
    NotificationManager.error('sorry, an error occured while fetching data')
    yield put({
      type: types.GET_GIFS_FAILURE,
      payload: error,
    })
  }
}

function* addFavourite(action) {
  try {
    yield put ({
      type: types.ADD_FAVOURITES_SUCCESS,
      payload: action.payload.item,
    })
    NotificationManager.success('added to favourites')
  } catch (error) {
    console.error(error)
    yield put({
      type: types.ADD_FAVOURITES_FAILURE,
      payload: error,
    })
  }
}

function* removeFavourite(action) {
  try {
    yield put ({
      type: types.REMOVE_FAVOURITES_SUCCESS,
      payload: action.payload.item,
    })
    NotificationManager.warning('removed from favourites')
  } catch (error) {
    console.error(error)
    yield put({
      type: types.REMOVE_FAVOURITES_FAILURE,
      payload: error,
    })
  }
}

export function* watcherSaga () {
  yield takeLatest(types.GET_GIFS_REQUEST, getGIFS)
  yield takeEvery(types.ADD_FAVOURITES_REQUEST, addFavourite)
  yield takeEvery(types.REMOVE_FAVOURITES_REQUEST, removeFavourite)
}