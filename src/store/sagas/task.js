import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  POST_TASK_SESSIONS,
  POST_TASK_SESSIONS_SUCCESS,
  POST_TASK_SESSIONS_FAILURE,
  REDIRECT_TO_TASK_SESSIONS,
} from '../actions/types';

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

function* watchTask() {
  yield takeEvery(POST_TASK_SESSIONS, workerPostTask);
}

export default watchTask;
