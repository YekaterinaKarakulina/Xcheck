import {
  GET_CROSSCHECK_SESSIONS,
  GET_CROSSCHECK_SESSION,
  POST_CROSSCHECK_SESSION,
  UPDATE_CROSSCHECK_SESSION,
  DELETE_CROSSCHECK_SESSION,
} from './types/cross-check-sessions';

const getCrossCheckSessions = () => {
  return {
    type: GET_CROSSCHECK_SESSIONS,
  };
};

const getCrossCheckSession = (id) => {
  return {
    type: GET_CROSSCHECK_SESSION,
    payload: id,
  };
};

const postCrossCheckSession = (crossCheckSession) => {
  return {
    type: POST_CROSSCHECK_SESSION,
    payload: crossCheckSession,
  };
};

const updateCrossCheckSession = (id) => {
  return {
    type: UPDATE_CROSSCHECK_SESSION,
    payload: id,
  };
};

const deleteCrossCheckSession = (id) => {
  return {
    type: DELETE_CROSSCHECK_SESSION,
    payload: id,
  };
};

export {
  getCrossCheckSessions,
  getCrossCheckSession,
  postCrossCheckSession,
  updateCrossCheckSession,
  deleteCrossCheckSession,
};
