import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_CROSSCHECK_SESSIONS,
  GET_CROSSCHECK_SESSIONS_SUCCESS,
  GET_CROSSCHECK_SESSIONS_FAILURE,
  GET_CROSSCHECK_SESSION_BY_ID,
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
  POST_CROSSCHECK_SESSION,
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  UPDATE_CROSSCHECK_SESSION,
  UPDATE_CROSSCHECK_SESSION_SUCCESS,
  UPDATE_CROSSCHECK_SESSION_FAILURE,
  REDIRECT_TO_CROSSCHECK_SESSION_FORM,
  REDIRECT_TO_CROSSCHECK_SESSIONS,
} from '../actions/types';

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
  try {
    const uri = `http://localhost:3000/crossCheckSessions/${action.payload}`;
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_CROSSCHECK_SESSION_SUCCESS, payload: result.data });
    yield put({ type: REDIRECT_TO_CROSSCHECK_SESSION_FORM });
  } catch {
    yield put({
      type: GET_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot get crossCheck session with this ID`,
    });
  }
}

function* workerPostCrossCheckSession(action) {
  const uri = 'http://localhost:3000/crossCheckSessions';
  try {
    yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_CROSSCHECK_SESSION_SUCCESS });
    yield put({ type: REDIRECT_TO_CROSSCHECK_SESSIONS });
  } catch {
    yield put({
      type: POST_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot post crossCheck session at ${uri}`,
    });
  }
}

function* workerUpdateCrossCheckSession(action) {
  try {
    const uri = `http://localhost:3000/crossCheckSessions/${action.payload.id}`;
    yield call(Axios.put, uri, action.payload);
    yield put({ type: UPDATE_CROSSCHECK_SESSION_SUCCESS });
    yield put({ type: REDIRECT_TO_CROSSCHECK_SESSIONS });
  } catch {
    yield put({
      type: UPDATE_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot update crossCheck session with this ID`,
    });
  }
}

function* watchGetCrossCheckSessions() {
  yield takeEvery(GET_CROSSCHECK_SESSIONS, workerGetCrossCheckSessions);
  yield takeEvery(GET_CROSSCHECK_SESSION_BY_ID, workerGetCrossCheckSessionById);
  yield takeEvery(POST_CROSSCHECK_SESSION, workerPostCrossCheckSession);
  yield takeEvery(UPDATE_CROSSCHECK_SESSION, workerUpdateCrossCheckSession);
}

export default watchGetCrossCheckSessions;
