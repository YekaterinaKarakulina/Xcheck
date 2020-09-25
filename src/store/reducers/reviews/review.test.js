import review from './review';
import { initialStateEmpty } from './test-data';


describe('Post review', () => {
  test('success', () => {
    const result = review(initialStateEmpty, {type: 'POST_REVIEW_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
  })
  test('failure', () => {
    const result = review(initialStateEmpty, {type: 'POST_REVIEW_FAILURE'});
    expect(result).toHaveLength(0);
  })
});

describe('Update review', () => {
  test('success', () => {
    const result = review(initialStateEmpty, {type: 'UPDATE_REVIEW_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
  })
  test('failure', () => {
    const result = review(initialStateEmpty, {type: 'UPDATE_REVIEW_FAILURE'});
    expect(result).toHaveLength(0);
  })
 
});

describe('none task session', () => {
    test('success', () => {
        const result = review(initialStateEmpty, { type: '' });
        expect(result).toBeInstanceOf(Object);
    })
    test('failure', () => {
        const result = review(initialStateEmpty, { type: '' });
        expect(result).toHaveLength(0);
    })
});

describe('without initialState', () => {
    test('success', () => {
        const result = review();
        expect(result).toBeInstanceOf(Object);
    })
});