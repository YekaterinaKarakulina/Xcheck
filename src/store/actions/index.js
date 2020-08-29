<<<<<<< HEAD
import { GET_USERS, POST_USER, GET_CROSSCHECK_SESSIONS, GET_REVIEWS_LIST } from './types';
=======
import { GET_USERS, POST_USER, GET_CROSSCHECK_SESSIONS, GET_TASKSTABLE_SESSIONS } from './types';
>>>>>>> 6b5b50e8344c4fdec9e2471d93fb22cb59265b3f

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

<<<<<<< HEAD
const getReviewsList = () => {
  return {
    type: GET_REVIEWS_LIST,
  };
};

export { getUsers, postUser, getCrossCheckSessions, getReviewsList };
=======
export { getUsers, postUser, getCrossCheckSessions, getTasksTable };
>>>>>>> 6b5b50e8344c4fdec9e2471d93fb22cb59265b3f
