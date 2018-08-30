import { put, call, takeLatest } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';
import Axios from 'axios';
import * as types from './types';
import { API } from '../config';

export function* getGIFS() {
  try {
    const response = yield call(
      () => {
        return Axios({
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          url: `${API}search?q=cats&api_key=${123}`,
        });
      }
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

export default function* () {
  yield takeLatest(types.GET_GIFS_REQUEST, getGIFS);
}