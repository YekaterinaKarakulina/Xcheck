import { GET_REVIEWS_LIST_SUCCESS, GET_REVIEWS_LIST_FAILURE } from '../actions/types';

const reviewsList = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS_LIST_SUCCESS:
      return action.payload;

    case GET_REVIEWS_LIST_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reviewsList;
