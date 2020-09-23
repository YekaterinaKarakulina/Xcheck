import getRoles from './login';

describe('Get roles', () => {
  test('no roles', () => {
    const result = getRoles();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toEqual('student');
  });
});
