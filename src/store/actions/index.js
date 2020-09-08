import {
  GET_USERS,
  POST_USER,
  GET_CROSSCHECK_SESSIONS,
  GET_TASKSTABLE_SESSIONS,
  GET_REVIEWS_LIST,
  POST_REVIEWS_REQUEST,
} from './types';

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

const getCrossCheckSessions = () => {
  return {
    type: GET_CROSSCHECK_SESSIONS,
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

export {
  getUsers,
  postUser,
  getCrossCheckSessions,
  getTasksTable,
  getReviewsList,
  postReviewRequest,
};
