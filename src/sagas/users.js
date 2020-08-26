import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { GET_USERS, GET_USERS_SUCCESS, POST_USER, POST_USER_SUCCESS } from '../store/actions/types';

function* workerGetUsers() {
  try {
    const uri = 'http://localhost:3000/users';
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_USERS_SUCCESS, payload: result.data });
  } catch {
    console.log('Failed');
  }
}

function* workerPostUser(action) {
  try {
    const uri = 'http://localhost:3000/users';
    yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_USER_SUCCESS, payload: action.payload });
  } catch {
    console.log('Failed');
  }
}

function* watchGetUsers() {
  yield takeEvery(GET_USERS, workerGetUsers);
}

function* watchPostUser() {
  yield takeEvery(POST_USER, workerPostUser);
}

export { watchGetUsers, watchPostUser };
