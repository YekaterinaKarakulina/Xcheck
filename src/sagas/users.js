import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { GET_USERS_SUCCESS, GET_USERS } from '../store/actions/types';

function* workerGetUsers() {
  try {
    const uri = 'http://localhost:3000/users';
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_USERS_SUCCESS, payload: result.data });
  } catch {
    console.log('Failed');
  }
}

function* watchGetUsers() {
  yield takeEvery(GET_USERS, workerGetUsers);
}

// eslint-disable-next-line import/prefer-default-export
export { watchGetUsers };
