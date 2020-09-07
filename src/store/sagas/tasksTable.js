import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_TASKSTABLE_SESSIONS,
  GET_TASKSTABLE_SESSIONS_SUCCESS,
  GET_TASKSTABLE_SESSIONS_FAILURE,
  GET_TASK_SESSION_BY_ID,
  REDIRECT_TO_TASK_SESSION_FORM,
} from '../actions/types';

function* workerGetTasksTable() {
  const uri = 'http://localhost:3000/tasks';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_TASKSTABLE_SESSIONS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_TASKSTABLE_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get tasks at ${uri}`,
    });
  }
}

function* workerGetTaskTableById(action) {
  const uri = `http://localhost:3000/tasks?taskId=${action.payload}`;
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_TASKSTABLE_SESSIONS_SUCCESS, payload: result.data });
    yield put({ type: REDIRECT_TO_TASK_SESSION_FORM });
  } catch {
    yield put({
      type: GET_TASKSTABLE_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get task at ${uri}`,
    });
  }
}

function* watchGetTasksTable() {
  yield takeEvery(GET_TASKSTABLE_SESSIONS, workerGetTasksTable);
  yield takeEvery(GET_TASK_SESSION_BY_ID, workerGetTaskTableById);
}

export default watchGetTasksTable;
