import store from './store';

describe('Store', () => {
  test('store', () => {
    const result = store;
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Object);
    expect(result.dispatch).toBeInstanceOf(Function);
    expect(result.subscribe).toBeInstanceOf(Function);
    expect(result.getState).toBeInstanceOf(Function);
  });
});