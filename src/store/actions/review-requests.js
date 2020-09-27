import {
  GET_REVIEW_REQUESTS,
  GET_REVIEW_REQUEST,
  POST_REVIEW_REQUEST,
  UPDATE_REVIEW_REQUEST,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types/review-requests';

const getReviewRequest = (id) => {
  return {
    type: GET_REVIEW_REQUEST,
    payload: id,
  };
};

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

const updateReviewRequest = (newReviewRequest) => {
  return {
    type: UPDATE_REVIEW_REQUEST,
    payload: newReviewRequest,
  };
};

const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export {
  getReviewRequests,
  getReviewRequest,
  postReviewRequest,
  updateReviewRequest,
  openModal,
  closeModal,
};
