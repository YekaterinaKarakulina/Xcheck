import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_CROSSCHECK_SESSIONS,
  GET_CROSSCHECK_SESSIONS_SUCCESS,
  GET_CROSSCHECK_SESSIONS_FAILURE,
  GET_CROSSCHECK_SESSION_BY_ID,
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
} from '../store/actions/types';

function* workerGetCrossCheckSessions() {
  const uri = 'http://localhost:3000/crossCheckSessions';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_CROSSCHECK_SESSIONS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_CROSSCHECK_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get crossCheck sessions at ${uri}`,
    });
  }
}

function* workerGetCrossCheckSessionById(action) {
  console.log(action.payload);
  try {
    const uri = 'http://localhost:3000/crossCheckSessions/rss2020Q3react-songbird';
    const result = yield call(Axios.get, uri);
    console.log(result.data);
    yield put({ type: GET_CROSSCHECK_SESSION_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot get crossCheck session with this ID`,
    });
  }
}

function* watchGetCrossCheckSessions() {
  yield takeEvery(GET_CROSSCHECK_SESSIONS, workerGetCrossCheckSessions);
  yield takeEvery(GET_CROSSCHECK_SESSION_BY_ID, workerGetCrossCheckSessionById);
}

export default watchGetCrossCheckSessions;
