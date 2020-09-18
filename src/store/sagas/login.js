import { takeEvery, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { axiosAuth, axiosDB } from '../../axios';
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
  console.log(uri);
  try {
    const response = yield axiosAuth.post('/authenticate', data);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });

    // Get user by githubId
    try {
      const result = yield axiosDB.get(`/users?githubId=${response.data.login}`);
      if (result.data.length) {
        yield put({ type: GET_USER_BY_GITHUBID_SUCCESS });
        yield put({ type: SET_USER_ROLES_SUCCESS, payload: result.data[0].roles });
      } else {
        // post a user
        const user = {
          id: uuidv4(),
          githubId: response.data.login,
          roles: getRoles(),
        };
        try {
          yield axiosDB.post('/users', user);
          yield put({ type: POST_USER_SUCCESS, payload: user });
        } catch {
          yield put({ type: POST_USER_FAILURE, payload: `ERROR! Cannot post user` });
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
