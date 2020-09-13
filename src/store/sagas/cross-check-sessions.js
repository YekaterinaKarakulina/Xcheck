import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_CROSSCHECK_SESSIONS,
  GET_CROSSCHECK_SESSIONS_SUCCESS,
  GET_CROSSCHECK_SESSIONS_FAILURE,
  GET_CROSSCHECK_SESSION,
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
  POST_CROSSCHECK_SESSION,
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  UPDATE_CROSSCHECK_SESSION,
  UPDATE_CROSSCHECK_SESSION_SUCCESS,
  UPDATE_CROSSCHECK_SESSION_FAILURE,
  DELETE_CROSSCHECK_SESSION,
  DELETE_CROSSCHECK_SESSION_SUCCESS,
  DELETE_CROSSCHECK_SESSION_FAILURE,
  REDIRECT_TO_CROSSCHECK_SESSION_FORM,
  REDIRECT_TO_CROSSCHECK_SESSIONS,
} from '../actions/types/cross-check-sessions';

function* workerGetCrossCheckSessions() {
  const uri = 'http://localhost:3000/crossCheckSessions';
  try {
    const result = yield call(axios.get, uri);
    yield put({ type: GET_CROSSCHECK_SESSIONS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_CROSSCHECK_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get crossCheck sessions at ${uri}`,
    });
  }
}

function* workerGetCrossCheckSession(action) {
  const { id, editMode } = action.payload;
  try {
    const uri = `http://localhost:3000/crossCheckSessions/${id}`;
    const result = yield call(axios.get, uri);
    yield put({ type: GET_CROSSCHECK_SESSION_SUCCESS, payload: result.data });
    if (editMode) {
      yield put({ type: REDIRECT_TO_CROSSCHECK_SESSION_FORM });
    }
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
    yield call(axios.post, uri, action.payload);
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
  const { id } = action.payload;
  try {
    const uri = `http://localhost:3000/crossCheckSessions/${id}`;
    yield call(axios.put, uri, action.payload);
    yield put({ type: UPDATE_CROSSCHECK_SESSION_SUCCESS });
    yield put({ type: REDIRECT_TO_CROSSCHECK_SESSIONS });
  } catch {
    yield put({
      type: UPDATE_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot update crossCheck session with id ${id}`,
    });
  }
}

function* workerDeleteCrossCheckSession(action) {
  const id = action.payload;
  // const uri = `http://localhost:3000/crossCheckSessions/${id}`;
  try {
    // yield call(axios.delete, uri);
    // yield put({ type: GET_REVIEW_REQUESTS });
    yield put({ type: DELETE_CROSSCHECK_SESSION_SUCCESS });
    yield put({ type: GET_CROSSCHECK_SESSIONS });
  } catch {
    yield put({
      type: DELETE_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot delete crossCheck session with id ${id}`,
    });
  }
}

function* watchCrossCheckSessions() {
  yield takeEvery(GET_CROSSCHECK_SESSIONS, workerGetCrossCheckSessions);
  yield takeEvery(GET_CROSSCHECK_SESSION, workerGetCrossCheckSession);
  yield takeEvery(POST_CROSSCHECK_SESSION, workerPostCrossCheckSession);
  yield takeEvery(UPDATE_CROSSCHECK_SESSION, workerUpdateCrossCheckSession);
  yield takeEvery(DELETE_CROSSCHECK_SESSION, workerDeleteCrossCheckSession);
}

export default watchCrossCheckSessions;
