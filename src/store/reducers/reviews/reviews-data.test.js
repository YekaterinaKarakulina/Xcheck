import reviewsData  from './reviews-data';
import {initialStateEmpty, reviewsDatabase } from './test-data';
  
describe('Get reviews', () => {
    test('success', () => {
        const result = reviewsData(initialStateEmpty, {type: 'GET_REVIEWS_SUCCESS', payload: reviewsDatabase});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(reviewsDatabase.length);
    })
    test('failure', () => {
        const result = reviewsData(initialStateEmpty, {type: 'GET_REVIEWS_FAILURE'});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    })
    test('without action', () => {
        const result = reviewsData(initialStateEmpty, { type: '' });
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    })
    test('without initialState', () => {
        const result = reviewsData();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    })
});