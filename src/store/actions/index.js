import { GET_USERS, POST_USER, GET_CROSSCHECK_SESSIONS, GET_REVIEWS_LIST } from './types';

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

export { getUsers, postUser, getCrossCheckSessions, getReviewsList };
