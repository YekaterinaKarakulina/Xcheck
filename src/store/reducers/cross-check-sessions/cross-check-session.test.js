import crossCheckSession from './cross-check-session';

describe('CrossCheck session form', () => {
test('redux-form reducer', () => {
    const result = crossCheckSession({}, {type: ''});
    expect(result).toBeDefined();
  })
});
