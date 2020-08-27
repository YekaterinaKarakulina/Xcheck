import { GET_TASKSTABLE_SESSIONS_SUCCESS, GET_TASKSTABLE_SESSIONS_FAILURE } from '../actions/types';

const tasksTable = (state = [], action) => {
  switch (action.type) {
    case GET_TASKSTABLE_SESSIONS_SUCCESS:
      return action.payload;

    case GET_TASKSTABLE_SESSIONS_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default tasksTable;
