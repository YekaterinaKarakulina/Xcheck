import {
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
  REDIRECT_TO_CROSSCHECK_SESSIONS,
  REDIRECT_TO_CROSSCHECK_SESSION_FORM,
} from '../actions/types';

const initialState = {
  isRedirectToTableReady: false,
  isRedirectToFormReady: false,
  formValues: {},
};

const crossCheckSessions = (state = initialState, action) => {
  switch (action.type) {
    case POST_CROSSCHECK_SESSION_SUCCESS:
      return state;

    case POST_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case GET_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        formValues: action.payload,
      };

    case GET_CROSSCHECK_SESSION_FAILURE:
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
      return state;
  }
};

export default crossCheckSessions;
