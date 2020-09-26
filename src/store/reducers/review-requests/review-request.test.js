import reviewRequest from './review-request';

describe('Review request form', () => {
test('redux-form reducer', () => {
    const result = reviewRequest({}, {type: ''});
    expect(result).toBeDefined();
  })
});
