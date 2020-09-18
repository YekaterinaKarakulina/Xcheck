import { takeEvery, put } from 'redux-saga/effects';
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
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
} from '../actions/types/task';

function* workerPostTask(action) {
  try {
    yield axiosDB.post('tasks', action.payload);
    yield put({ type: POST_TASK_SESSIONS_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: POST_TASK_SESSIONS_FAILURE,
      payload: 'ERROR! Cannot post task',
    });
  }
}

function* workerUpdateTaskSession(action) {
  const { id } = action.payload;
  try {
    yield axiosDB.put(`/tasks/${id}`, action.payload);
    yield put({ type: UPDATE_TASK_SESSION_SUCCESS });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPDATE_TASK_SESSION_FAILURE,
      payload: `ERROR! Cannot update task with ID ${id}`,
    });
  }
}

function* workerGetTasksTable() {
  try {
    const result = yield axiosDB.get('tasks');
    yield put({ type: GET_TASKSTABLE_SESSIONS_SUCCESS, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_TASKSTABLE_SESSIONS_FAILURE,
      payload: 'ERROR! Cannot get tasks',
    });
  }
}

function* workerGetTaskTableById(action) {
  const id = action.payload;
  try {
    const result = yield axiosDB.get(`/tasks?taskId=${id}`);
    yield put({ type: GET_TASK_SUCCESS, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_TASK_FAILURE,
      payload: `ERROR! Cannot get task with ID ${id}`,
    });
  }
}

function* watchTask() {
  yield takeEvery(POST_TASK_SESSIONS, workerPostTask);
  yield takeEvery(UPDATE_TASK_SESSION, workerUpdateTaskSession);
  yield takeEvery(GET_TASKSTABLE_SESSIONS, workerGetTasksTable);
  yield takeEvery(GET_TASK, workerGetTaskTableById);
}

export default watchTask;
