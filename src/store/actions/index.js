import { GET_USERS, POST_USER, GET_REVIEWS_LIST, POST_REVIEWS_REQUEST } from './types-old';

const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

const postUser = (newUser) => {
  return {
    type: POST_USER,
    payload: newUser,
  };
};

const getReviewsList = () => {
  return {
    type: GET_REVIEWS_LIST,
  };
};

const postReviewRequest = (newReviewRequest) => {
  return {
    type: POST_REVIEWS_REQUEST,
    payload: newReviewRequest,
  };
};

export { getUsers, postUser, getReviewsList, postReviewRequest };
