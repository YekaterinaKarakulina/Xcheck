import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGOUT_SUCCESS } from './types';

export const login = (data, uri) => ({
  type: LOGIN,
  payload: { data, uri },
});

export const loginSuccess = (isLoggedIn, user) => ({
  type: LOGIN_SUCCESS,
  payload: { isLoggedIn, user },
});

export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: { errorMessage },
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
