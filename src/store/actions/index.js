import { GET_USERS, POST_USER, GET_TASKSTABLE_SESSIONS, POST_REVIEWS_REQUEST } from './types-old';

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

const getTasksTable = () => {
  return {
    type: GET_TASKSTABLE_SESSIONS,
  };
};

const postReviewRequest = (newReviewRequest) => {
  return {
    type: POST_REVIEWS_REQUEST,
    payload: newReviewRequest,
  };
};

export { getUsers, postUser, getTasksTable, postReviewRequest };
