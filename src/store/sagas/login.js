import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  LOGIN,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_BY_GITHUBID_SUCCESS,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  SET_USER_ROLES,
  SET_USER_ROLES_SUCCESS,
} from '../actions/types/login';
import { getRoles } from '../../utils';

function* workerLogin(action) {
  const { data, uri } = action.payload;
  yield put({ type: LOGIN_START });
  try {
    const response = yield call(Axios.post, uri, data);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });

    // Get user by githubId
    const userUrl = `http://localhost:3000/users?githubId=${response.data.login}`;
    try {
      const result = yield call(Axios.get, userUrl);
      if (result.data.length) {
        yield put({ type: GET_USER_BY_GITHUBID_SUCCESS });
        yield put({ type: SET_USER_ROLES_SUCCESS, payload: result.data[0].roles });
      } else {
        // post a user
        // TODO: post only if user doesn't exist in db.json
        const url = 'http://localhost:3000/users';
        const user = {
          id: uuidv4(),
          githubId: response.data.login,
          roles: getRoles(),
        };
        try {
          yield call(Axios.post, url, user);
          yield put({ type: POST_USER_SUCCESS, payload: user });
        } catch {
          yield put({ type: POST_USER_FAILURE, payload: `ERROR! Cannot post user at ${url}` });
        }
      }
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
    yield put({ type: LOGIN_FAILURE, payload: `ERROR! Cannot login` });
  }
}

function* workerUserRoles(action) {
  yield put({ type: SET_USER_ROLES_SUCCESS, payload: action.payload.roles });
}

function* workerLogout() {
  yield put({ type: LOGOUT_SUCCESS });
}

function* watchLogin() {
  yield takeEvery(LOGIN, workerLogin);
}

function* watchUserRoles() {
  yield takeEvery(SET_USER_ROLES, workerUserRoles);
}

function* watchLogout() {
  yield takeEvery(LOGOUT, workerLogout);
}

export { watchLogin, watchUserRoles, watchLogout };
