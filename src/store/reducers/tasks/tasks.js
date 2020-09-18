import {
  POST_TASK_SESSIONS_SUCCESS,
  POST_TASK_SESSIONS_FAILURE,
  GET_TASKSTABLE_SESSIONS_SUCCESS,
  GET_TASKSTABLE_SESSIONS_FAILURE,
  GET_TASK_BY_TITLE_SUCCESS,
  GET_TASK_BY_TITLE_FAILURE,
  UPDATE_TASK_SESSION_SUCCESS,
  UPDATE_TASK_SESSION_FAILURE,
} from '../../actions/types/task';

const initialState = {
  formValues: {},
  currentTask: {},
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKSTABLE_SESSIONS_SUCCESS:
      return {
        ...state,
        formValues: action.payload,
      };

    case GET_TASKSTABLE_SESSIONS_FAILURE:
      return state;

    case GET_TASK_BY_TITLE_SUCCESS:
      return {
        ...state,
        currentTask: action.payload,
      };
    case GET_TASK_BY_TITLE_FAILURE:
      return {
        ...state,
      };

    case UPDATE_TASK_SESSION_SUCCESS:
      return {
        ...state,
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
