import reviewRequests from './review-requests';
import {initialStateFull, reviewRequest } from './test-data';

describe('reviewRequests', () => {
    test('modal open', () => {
      const result = reviewRequests(initialStateFull, {type: 'OPEN_MODAL'});
      expect(result.isModalVisible).toEqual(true);
    })
    test('modal close', () => {
      const result = reviewRequests(initialStateFull, {type: 'CLOSE_MODAL'});
      expect(result.isModalVisible).toEqual(false);
    })
  });

describe('Get review request', () => {
  test('success', () => {
    const result = reviewRequests(initialStateFull, {type: 'GET_REVIEW_REQUESTS_SUCCESS', payload: reviewRequest});
        expect(result.currentReviewRequest).toEqual(reviewRequest);
    })
  test('failure', () => {
    const result = reviewRequests(initialStateFull, {type: 'GET_REVIEW_REQUESTS_FAILURE'});
    expect(result.currentReviewRequest).toEqual({});
  })
});

describe('Post review request', () => {
  test('success', () => {
    const result = reviewRequests(initialStateFull, {type: 'POST_REVIEW_REQUEST_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
  test('failure', () => {
    const result = reviewRequests(initialStateFull, {type: 'POST_REVIEW_REQUEST_FAILURE'});
    expect(result.currentReviewRequest).toBeTruthy();
  })
});

describe('Update review request', () => {
  test('success', () => {
    const result = reviewRequests(initialStateFull, {type: 'UPDATE_REVIEW_REQUEST_SUCCESS'});
    expect(result).toBeInstanceOf(Object);
    expect(result.isModalVisible).toBeFalsy();
  })
  test('failure', () => {
    const result = reviewRequests(initialStateFull, {type: 'UPDATE_REVIEW_REQUEST_FAILURE'});
    expect(result.currentReviewRequest).toBeTruthy();
  })
});