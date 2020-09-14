import { LOGIN, SET_USER_ROLES, LOGOUT } from './types';

export const login = (data, uri) => ({
  type: LOGIN,
  payload: { data, uri },
});

export const setUserRoles = (roles) => {
  return {
    type: SET_USER_ROLES,
    payload: { roles },
  };
};

export const logout = () => ({
  type: LOGOUT,
});
