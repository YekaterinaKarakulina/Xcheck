/* eslint-disable import/prefer-default-export */
import { POST_CROSSCHECK_SESSION, GET_CROSSCHECK_SESSION_BY_ID } from './types';

const postCrossCheckSession = (crossCheckSession) => {
  return {
    type: POST_CROSSCHECK_SESSION,
    payload: crossCheckSession,
  };
};

const getCrossCheckSessionById = (id) => {
  return {
    type: GET_CROSSCHECK_SESSION_BY_ID,
    payload: id,
  };
};

export { postCrossCheckSession, getCrossCheckSessionById };
