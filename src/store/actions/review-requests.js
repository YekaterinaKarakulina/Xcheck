import { GET_REVIEW_REQUESTS, POST_REVIEW_REQUEST } from './types/review-requests';

const getReviewRequests = () => {
  return {
    type: GET_REVIEW_REQUESTS,
  };
};

const postReviewRequest = (newReviewRequest) => {
  return {
    type: POST_REVIEW_REQUEST,
    payload: newReviewRequest,
  };
};

export { getReviewRequests, postReviewRequest };
