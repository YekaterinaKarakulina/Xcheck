import {
  GET_REVIEW_REQUESTS_SUCCESS,
  GET_REVIEW_REQUESTS_FAILURE,
} from '../../actions/types/review-requests';

const reviewRequestsData = (state = [], action) => {
  switch (action && action.type) {
    case GET_REVIEW_REQUESTS_SUCCESS:
      return action.payload;

    case GET_REVIEW_REQUESTS_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reviewRequestsData;
