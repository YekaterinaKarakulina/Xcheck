import { GET_REVIEWS, POST_REVIEW, UPDATE_REVIEW } from './types/reviews';

import {
  getReviews,
  postReview,
  updateReview
} from './reviews';

describe('Reviews actions', () => {
  test('getReviews', () => {
    const result = getReviews();
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(GET_REVIEWS);
  });

  test('postReview', () => {
    const result = postReview({id: 123, data: 'some_data'});
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(POST_REVIEW);
    expect(result.payload).toBeInstanceOf(Object);
    expect(result.payload.id).toEqual(123);
    expect(result.payload.data).toEqual('some_data');
  });

  test('updateReview', () => {
    const result = updateReview('some_id');
    expect(result).toBeInstanceOf(Object);
    expect(result.type).toEqual(UPDATE_REVIEW);
    expect(result.payload).toEqual('some_id');
  });
});