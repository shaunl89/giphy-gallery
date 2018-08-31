import { put, call, takeLatest } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import Axios from 'axios';
import * as types from './types';
import { API } from '../config';

const fetchAPI = (value) => {
  return Axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    url: `${API}search?q=${value}&api_key=${process.env.REACT_APP_API_KEY}&limit=8`,
  });
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
    });
  } catch (error) {
    console.error(error);
    NotificationManager.error('oops, something went wrong!');
    yield put({
      type: types.GET_GIFS_FAILURE,
      payload: error,
    });
  }
}

export function* watcherSaga () {
  yield takeLatest(types.GET_GIFS_REQUEST, getGIFS);
}