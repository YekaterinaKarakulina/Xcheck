import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_CROSSCHECK_SESSIONS,
  GET_CROSSCHECK_SESSIONS_SUCCESS,
  GET_CROSSCHECK_SESSIONS_FAILURE,
} from '../store/actions/types';

function* workerGetCrossCheckSessions() {
  const uri = 'http://localhost:3000/crossCheckSessions';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_CROSSCHECK_SESSIONS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_CROSSCHECK_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get users at ${uri}`,
    });
  }
}

function* watchGetCrossCheckSessions() {
  yield takeEvery(GET_CROSSCHECK_SESSIONS, workerGetCrossCheckSessions);
}

export default watchGetCrossCheckSessions;
