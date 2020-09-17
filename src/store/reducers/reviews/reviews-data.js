import { GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE } from '../../actions/types/reviews';

const reviewsData = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS_SUCCESS:
      return action.payload;

    case GET_REVIEWS_FAILURE:
      return state;

    default:
      return state;
  }
};

export default reviewsData;
