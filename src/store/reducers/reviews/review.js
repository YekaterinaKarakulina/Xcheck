import {
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAILURE,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
} from '../../actions/types/reviews';

const review = (state = [], action) => {
  switch (action.type) {
    case POST_REVIEW_SUCCESS:
      return {
        ...state,
      };

    case POST_REVIEW_FAILURE:
      return state;

    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
      };

    case UPDATE_REVIEW_FAILURE:
      return state;

    default:
      return state;
  }
};

export default review;
