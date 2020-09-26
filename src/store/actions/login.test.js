import { LOGIN, POST_USER, SET_USER_ROLES, LOGOUT } from './types/login';

import {
  login,
  postUser,
  setUserRoles,
  logout
} from './login';

import { newUser, roles } from './test-data';

describe('Login actions', () => {
  test('login', () => {
    const result = login({});
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(LOGIN);
    expect(result.payload).toEqual({data: {}});
  });

  test('postUser', () => {
    const result = postUser(newUser);
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(POST_USER);
    expect(result.payload.githubId).toEqual('viktorsipach');
    expect(result.payload.roles).toBeInstanceOf(Array);
    expect(result.payload.roles.length).toEqual(4);
  });

  test('setUserRoles', () => {
    const result = setUserRoles(roles);
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(SET_USER_ROLES);
    expect(result.payload.roles).toBeInstanceOf(Array);
    expect(result.payload.roles.length).toEqual(4);
  });

  test('logout', () => {
    const result = logout({});
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(LOGOUT);
  });
});