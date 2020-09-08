import { POST_REVIEWS_REQUEST_SUCCESS, POST_REVIEWS_REQUEST_FAILURE } from '../actions/types';

const reviewRequest = (state = [], action) => {
  switch (action.type) {
    case POST_REVIEWS_REQUEST_SUCCESS:
      return action.payload;

    case POST_REVIEWS_REQUEST_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reviewRequest;
