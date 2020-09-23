import login from './login';
import { user, roles, initialStateFilled } from './test-data';

describe('Login', () => {
  test('start', () => {
    const result = login(initialStateFilled, {type: 'LOGIN_START'});
        expect(result.loading).toBeTruthy();
      })
  test('success', () => {
     const result = login(initialStateFilled, {type: 'LOGIN_SUCCESS', payload: user});
        expect(result.user).toEqual(user);
      })
  test('failure', () => {
      const result = login(initialStateFilled, {type: 'LOGIN_FAILURE', payload: 'ERROR! Cannot login'});
      expect(result.errorMessage).toEqual('ERROR! Cannot login');
    })
});

describe('Get github user by id', () => {
  test('success', () => {
    const result = login(initialStateFilled, {type: 'GET_USER_BY_GITHUBID_SUCCESS'});
        expect(result).toEqual(initialStateFilled);
      })
});

describe('Set user roles', () => {
  test('success', () => {
    const result = login(initialStateFilled, {type: 'SET_USER_ROLES_SUCCESS', payload: roles});
        expect(result.roles).toEqual(roles);
      })
});

describe('Logout', () => {
  test('success', () => {
    const result = login(initialStateFilled, {type: 'LOGOUT_SUCCESS'});
       expect(result.user).toEqual(null);
     })
});
