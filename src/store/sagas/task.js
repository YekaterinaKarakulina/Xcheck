import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  POST_TASK_SESSIONS,
  POST_TASK_SESSIONS_SUCCESS,
  POST_TASK_SESSIONS_FAILURE,
  REDIRECT_TO_TASK_SESSIONS,
  UPDATE_TASK_SESSION_SUCCESS,
  UPDATE_TASK_SESSION_FAILURE,
  UPDATE_TASK_SESSION,
} from '../actions/types-old';

function* workerPostTask(action) {
  const uri = 'http://localhost:3000/tasks';
  try {
    yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_TASK_SESSIONS_SUCCESS });
    yield put({ type: REDIRECT_TO_TASK_SESSIONS });
  } catch {
    yield put({
      type: POST_TASK_SESSIONS_FAILURE,
      payload: `ERROR! Cannot post task at ${uri}`,
    });
  }
}

function* workerUpdateTaskSession(action) {
  try {
    const uri = `http://localhost:3000/tasks/${action.payload.id}`;
    yield call(Axios.put, uri, action.payload);
    yield put({ type: UPDATE_TASK_SESSION_SUCCESS });
    yield put({ type: REDIRECT_TO_TASK_SESSIONS });
  } catch {
    yield put({
      type: UPDATE_TASK_SESSION_FAILURE,
      payload: `ERROR! Cannot update task session with this ID`,
    });
  }
}

function* watchTask() {
  yield takeEvery(POST_TASK_SESSIONS, workerPostTask);
  yield takeEvery(UPDATE_TASK_SESSION, workerUpdateTaskSession);
}

export default watchTask;
