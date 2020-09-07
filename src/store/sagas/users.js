import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from '../actions/types-old';

function* workerGetUsers() {
  const uri = 'http://localhost:3000/users';
  try {
    const result = yield call(Axios.get, uri);
    yield put({ type: GET_USERS_SUCCESS, payload: result.data });
  } catch (error) {
    console.error('error', error);
    yield put({ type: GET_USERS_FAILURE, payload: `ERROR! Cannot get users at ${uri}` });
  }
}

function* workerPostUser(action) {
  const uri = 'http://localhost:3000/users';
  try {
    yield call(Axios.post, uri, action.payload);
    yield put({ type: POST_USER_SUCCESS, payload: action.payload });
  } catch {
    yield put({ type: POST_USER_FAILURE, payload: `ERROR! Cannot post user at ${uri}` });
  }
}

function* watchUsers() {
  yield takeEvery(GET_USERS, workerGetUsers);
  yield takeEvery(POST_USER, workerPostUser);
}

export default watchUsers;
