import { GET_USERS, POST_USER, GET_TASKSTABLE_SESSIONS } from './types';

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

export { getUsers, postUser, getTasksTable };
