import { GET_TASK_SESSION_BY_ID, POST_TASK_SESSIONS, UPDATE_TASK_SESSION } from './types';

const getTaskSessionById = (id) => {
  return {
    type: GET_TASK_SESSION_BY_ID,
    payload: id,
  };
};

const postTaskSession = (values) => {
  return {
    type: POST_TASK_SESSIONS,
    payload: values,
  };
};

const updateTaskSession = (values) => {
  return {
    type: UPDATE_TASK_SESSION,
    payload: values,
  };
};

export { getTaskSessionById, postTaskSession, updateTaskSession };
