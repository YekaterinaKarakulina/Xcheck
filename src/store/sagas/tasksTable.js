import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_TASKSTABLE_SESSIONS,
  GET_TASKSTABLE_SESSIONS_SUCCESS,
  GET_TASKSTABLE_SESSIONS_FAILURE,
} from '../actions/types';

function* workerGetTasksTable() {
  const uri = 'http://localhost:3000/tasksTableData';
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

function* watchGetTasksTable() {
  yield takeEvery(GET_TASKSTABLE_SESSIONS, workerGetTasksTable);
}

export default watchGetTasksTable;
