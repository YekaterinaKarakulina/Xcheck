import reviewRequestsData from './review-requests-data';
import {initialStateEmpty, reviewRequests } from './test-data';

describe('Get review requests', () => {
    test('success', () => {
        const result = reviewRequestsData(initialStateEmpty, {type: 'GET_REVIEW_REQUESTS_SUCCESS', payload: reviewRequests});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(reviewRequests.length);
    })
    test('failure', () => {
        const result = reviewRequestsData(initialStateEmpty, {type: 'GET_REVIEW_REQUESTS_FAILURE'});
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    })
});