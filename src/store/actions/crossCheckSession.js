/* eslint-disable import/prefer-default-export */
import { POST_CROSSCHECK_SESSION } from './types';

const postCrossCheckSession = (crossCheckSession) => {
  return {
    type: POST_CROSSCHECK_SESSION,
    payload: crossCheckSession,
  };
};

export { postCrossCheckSession };
