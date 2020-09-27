import { GET_REVIEWS, POST_REVIEW, UPDATE_REVIEW } from './types/reviews';

const getReviews = () => {
  return {
    type: GET_REVIEWS,
  };
};

const postReview = (newReview) => {
  return {
    type: POST_REVIEW,
    payload: newReview,
  };
};

const updateReview = (id) => {
  return {
    type: UPDATE_REVIEW,
    payload: id,
  };
};

export { getReviews, postReview, updateReview };
