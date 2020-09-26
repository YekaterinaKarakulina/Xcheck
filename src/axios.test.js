import { axiosDB, axiosAuth, axiosApp } from './axios';

describe('Axios', () => {
  test('axiosDB', () => {
    const result = axiosDB;
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Function);
    expect(result.defaults.baseURL).toBeDefined();
  });

  test('axiosAuth', () => {
    const result = axiosAuth;
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Function);
    expect(result.defaults.baseURL).toBeDefined();
  });

  test('axiosApp', () => {
    const result = axiosApp;
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Function);
    expect(result.defaults.baseURL).toBeDefined();
  });
});
    