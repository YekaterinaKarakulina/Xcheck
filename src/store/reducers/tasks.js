import { POST_TASK_SESSIONS_SUCCESS, POST_TASK_SESSIONS_FAILURE } from '../actions/types';

const tasks = (state = [], action) => {
  switch (action.type) {
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
