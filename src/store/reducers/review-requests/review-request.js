import {
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
} from '../../actions/types/review-requests';

const reviewRequest = (state = [], action) => {
  switch (action.type) {
    case POST_REVIEW_REQUEST_SUCCESS:
      return action.payload;

    case POST_REVIEW_REQUEST_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reviewRequest;
