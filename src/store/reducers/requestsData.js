import { GET_REQUESTS_SUCCESS, GET_REQUESTS_FAILURE } from '../actions/types-old';

const crossCheckSessionsData = (state = [], action) => {
  switch (action.type) {
    case GET_REQUESTS_SUCCESS:
      return action.payload;

    case GET_REQUESTS_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default crossCheckSessionsData;
