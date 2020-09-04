import {
  GET_CROSSCHECK_SESSION_BY_ID,
  POST_CROSSCHECK_SESSION,
  UPDATE_CROSSCHECK_SESSION,
} from './types';

const getCrossCheckSessionById = (id) => {
  return {
    type: GET_CROSSCHECK_SESSION_BY_ID,
    payload: id,
  };
};

const postCrossCheckSession = (crossCheckSession) => {
  return {
    type: POST_CROSSCHECK_SESSION,
    payload: crossCheckSession,
  };
};

const updateCrossCheckSession = (crossCheckSession) => {
  return {
    type: UPDATE_CROSSCHECK_SESSION,
    payload: crossCheckSession,
  };
};

export { getCrossCheckSessionById, postCrossCheckSession, updateCrossCheckSession };
