import {
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  UPDATE_CROSSCHECK_SESSION_SUCCESS,
  UPDATE_CROSSCHECK_SESSION_FAILURE,
  DELETE_CROSSCHECK_SESSION_SUCCESS,
  DELETE_CROSSCHECK_SESSION_FAILURE,
  REDIRECT_TO_CROSSCHECK_SESSIONS,
  REDIRECT_TO_CROSSCHECK_SESSION_FORM,
} from '../../actions/types/cross-check-sessions';

const initialState = {
  isRedirectToTableReady: false,
  isRedirectToFormReady: false,
  currentSessionInfo: {},
};

const crossCheckSessions = (state = initialState, action) => {
  switch (action.type) {
    case GET_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        currentSessionInfo: {
          ...action.payload,
        },
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
      };

    case GET_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case POST_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
      };

    case POST_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case UPDATE_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
        currentSessionInfo: {},
      };

    case UPDATE_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case DELETE_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
      };

    case DELETE_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case REDIRECT_TO_CROSSCHECK_SESSIONS:
      return {
        ...state,
        isRedirectToTableReady: true,
      };

    case REDIRECT_TO_CROSSCHECK_SESSION_FORM:
      return {
        ...state,
        isRedirectToFormReady: true,
      };

    default:
      return {
        ...state,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
      };
  }
};

export default crossCheckSessions;
