import { LOGIN, POST_USER, SET_USER_ROLES, LOGOUT } from './types/login';

export const login = (data) => ({
  type: LOGIN,
  payload: { data },
});

export const postUser = (newUser) => {
  return {
    type: POST_USER,
    payload: newUser,
  };
};

export const setUserRoles = (roles) => {
  return {
    type: SET_USER_ROLES,
    payload: { roles },
  };
};

export const logout = () => ({
  type: LOGOUT,
});
