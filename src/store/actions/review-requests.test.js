import {
    GET_REVIEW_REQUEST,
    GET_REVIEW_REQUESTS,
    POST_REVIEW_REQUEST,
    UPDATE_REVIEW_REQUEST,
    OPEN_MODAL,
    CLOSE_MODAL
  } from './types/review-requests';

  import {
    getReviewRequest,
    getReviewRequests,
    postReviewRequest,
    updateReviewRequest,
    openModal,
    closeModal
  } from './review-requests'

describe('Review requests actions', () => {
  test('getReviewRequest', () => {
    const result = getReviewRequest('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_REVIEW_REQUEST)
    expect(result.payload).toEqual('some_id');
  });

  test('getReviewRequests', () => {
    const result = getReviewRequests();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_REVIEW_REQUESTS)
  });

  test('postReviewRequest', () => {
    const result = postReviewRequest('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(POST_REVIEW_REQUEST);
    expect(result.payload).toEqual('some_id');
  });

  test('updateReviewRequest', () => {
    const result = updateReviewRequest('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(UPDATE_REVIEW_REQUEST);
    expect(result.payload).toEqual('some_id');
  });

  test('openModal', () => {
    const result = openModal();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(OPEN_MODAL);
  });

  test('closeModal', () => {
    const result = closeModal();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(CLOSE_MODAL);
  });  
});