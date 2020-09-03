import {
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  REDIRECT_TO_CROSSCHECK_SESSIONS,
} from '../actions/types';

const crossCheckSession = (state = {}, action) => {
  switch (action.type) {
    case POST_CROSSCHECK_SESSION_SUCCESS:
      return action.payload;

    case POST_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case REDIRECT_TO_CROSSCHECK_SESSIONS:
      return {
        ...state,
        isRedirectReady: true,
      };

    default:
      return state;
  }
};

export default crossCheckSession;
