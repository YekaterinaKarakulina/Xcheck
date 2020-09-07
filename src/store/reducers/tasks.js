import {
  POST_TASK_SESSIONS_SUCCESS,
  POST_TASK_SESSIONS_FAILURE,
  GET_TASKSTABLE_SESSIONS_SUCCESS,
  GET_TASKSTABLE_SESSIONS_FAILURE,
  REDIRECT_TO_TASK_SESSIONS,
  REDIRECT_TO_TASK_SESSION_FORM,
  UPDATE_TASK_SESSION_SUCCESS,
  UPDATE_TASK_SESSION_FAILURE,
} from '../actions/types';

const initialState = {
  isRedirectToTableReady: false,
  isRedirectToFormReady: false,
  formValues: {},
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKSTABLE_SESSIONS_SUCCESS:
      return {
        ...state,
        formValues: action.payload,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
      };

    case GET_TASKSTABLE_SESSIONS_FAILURE:
      return state;

    case REDIRECT_TO_TASK_SESSIONS:
      return {
        ...state,
        isRedirectToTableReady: true,
      };

    case REDIRECT_TO_TASK_SESSION_FORM:
      return {
        ...state,
        isRedirectToFormReady: true,
      };

    case UPDATE_TASK_SESSION_SUCCESS:
      return {
        ...state,
        isRedirectToTableReady: false,
        isRedirectToFormReady: false,
        formValues: {},
      };

    case UPDATE_TASK_SESSION_FAILURE:
      return state;

    case POST_TASK_SESSIONS_SUCCESS:
      return {
        ...state,
      };

    case POST_TASK_SESSIONS_FAILURE:
      return state;

    default:
      return state;
  }
};

export default tasks;
