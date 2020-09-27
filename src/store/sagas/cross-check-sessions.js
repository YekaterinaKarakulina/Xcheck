import { takeEvery, put } from 'redux-saga/effects';
import { axiosDB } from '../../axios';

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
} from '../actions/types/cross-check-sessions';

function* workerGetCrossCheckSessions() {
  try {
    const result = yield axiosDB.get('crossCheckSessions');
    yield put({ type: GET_CROSSCHECK_SESSIONS_SUCCESS, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_CROSSCHECK_SESSIONS_FAILURE,
      payload: 'ERROR! Cannot get crossCheck sessions',
    });
  }
}

function* workerGetCrossCheckSession(action) {
  const id = action.payload;
  try {
    const result = yield axiosDB.get(`crossCheckSessions/${id}`);
    yield put({ type: GET_CROSSCHECK_SESSION_SUCCESS, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot get crossCheck session with ID ${id}`,
    });
  }
}

function* workerPostCrossCheckSession(action) {
  try {
    yield axiosDB.post('crossCheckSessions', action.payload);
    yield put({ type: POST_CROSSCHECK_SESSION_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: POST_CROSSCHECK_SESSION_FAILURE,
      payload: 'ERROR! Cannot post crossCheck session',
    });
  }
}

function* workerUpdateCrossCheckSession(action) {
  const { id } = action.payload;
  try {
    yield axiosDB.put(`crossCheckSessions/${id}`, action.payload);
    yield put({ type: UPDATE_CROSSCHECK_SESSION_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPDATE_CROSSCHECK_SESSION_FAILURE,
      payload: `ERROR! Cannot update crossCheck session with ID ${id}`,
    });
  }
}

function* workerDeleteCrossCheckSession(action) {
  const id = action.payload;
  try {
    yield axiosDB.delete(`crossCheckSessions/${id}`);
    yield put({ type: DELETE_CROSSCHECK_SESSION_SUCCESS });
    yield put({ type: GET_CROSSCHECK_SESSIONS });
  } catch (error) {
    console.error(error);
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
