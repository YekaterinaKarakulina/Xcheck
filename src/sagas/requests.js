import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { GET_REQUESTS, GET_REQUESTS_SUCCESS, GET_REQUESTS_FAILURE } from '../store/actions/types';

function* workerGetCrossCheckSessions() {
  const uri = 'http://localhost:3000/requests';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_REQUESTS_SUCCESS, payload: result.data });
  } catch {
    yield put({
      type: GET_REQUESTS_FAILURE,
      payload: `ERROR! Cannot get requests from ${uri}`,
    });
  }
}

function* watchRequests() {
  yield takeEvery(GET_REQUESTS, workerGetCrossCheckSessions);
}

export default watchRequests;
