/* eslint-disable import/prefer-default-export */
import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  POST_CROSSCHECK_SESSION,
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
} from '../store/actions/types';

function* workerPostCrossCheckSession(action) {
  const uri = 'http://localhost:3000/crossCheckSessions';
  try {
    const result = yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_CROSSCHECK_SESSION_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: POST_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot post crossCheck session at ${uri}`,
    });
  }
}

function* watchPostCrossCheckSession() {
  yield takeEvery(POST_CROSSCHECK_SESSION, workerPostCrossCheckSession);
}

export { watchPostCrossCheckSession };
