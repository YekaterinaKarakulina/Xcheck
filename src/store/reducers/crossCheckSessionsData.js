import { GET_CROSSCHECK_SESSIONS_SUCCESS, GET_CROSSCHECK_SESSIONS_FAILURE } from '../actions/types';

const crossCheckSessionsData = (state = [], action) => {
  switch (action.type) {
    case GET_CROSSCHECK_SESSIONS_SUCCESS:
      return action.payload;

    case GET_CROSSCHECK_SESSIONS_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default crossCheckSessionsData;
