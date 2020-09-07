import { GET_USERS, POST_USER, GET_TASKSTABLE_SESSIONS, GET_REVIEWS_LIST } from './types-old';

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

const getReviewsList = () => {
  return {
    type: GET_REVIEWS_LIST,
  };
};

export { getUsers, postUser, getTasksTable, getReviewsList };
