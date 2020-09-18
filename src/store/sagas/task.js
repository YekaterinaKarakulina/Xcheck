import { takeEvery, call, put } from 'redux-saga/effects';
import { axiosDB } from '../../axios';
import {
  POST_TASK_SESSIONS,
  POST_TASK_SESSIONS_SUCCESS,
  POST_TASK_SESSIONS_FAILURE,
  UPDATE_TASK_SESSION_SUCCESS,
  UPDATE_TASK_SESSION_FAILURE,
  UPDATE_TASK_SESSION,
  GET_TASKSTABLE_SESSIONS,
  GET_TASKSTABLE_SESSIONS_SUCCESS,
  GET_TASKSTABLE_SESSIONS_FAILURE,
  GET_TASK_SESSION_BY_ID,
} from '../actions/types/task';

function* workerPostTask(action) {
  const uri = 'http://localhost:3000/tasks';
  try {
    yield axiosDB.post('tasks', action.payload);
    yield put({ type: POST_TASK_SESSIONS_SUCCESS });
  } catch {
    yield put({
      type: POST_TASK_SESSIONS_FAILURE,
      payload: `ERROR! Cannot post task at ${uri}`,
    });
  }
}

function* workerUpdateTaskSession(action) {
  try {
    yield axiosDB.put(`/tasks/${action.payload.id}`, action.payload);
    yield put({ type: UPDATE_TASK_SESSION_SUCCESS });
  } catch {
    yield put({
      type: UPDATE_TASK_SESSION_FAILURE,
      payload: `ERROR! Cannot update task session with this ID`,
    });
  }
}

function* workerGetTasksTable() {
  const uri = 'http://localhost:3000/tasks';
  try {
    const result = yield axiosDB.get('tasks');
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
    const result = yield axiosDB.get(`/tasks?taskId=${action.payload}`);
    yield put({ type: GET_TASKSTABLE_SESSIONS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_TASKSTABLE_SESSIONS_FAILURE,
      payload: `ERROR! Cannot get task at ${uri}`,
    });
  }
}

function* watchTask() {
  yield takeEvery(POST_TASK_SESSIONS, workerPostTask);
  yield takeEvery(UPDATE_TASK_SESSION, workerUpdateTaskSession);
  yield takeEvery(GET_TASKSTABLE_SESSIONS, workerGetTasksTable);
  yield takeEvery(GET_TASK_SESSION_BY_ID, workerGetTaskTableById);
}

export default watchTask;
