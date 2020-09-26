import {
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_REVIEW_REQUEST_SUCCESS,
  GET_REVIEW_REQUEST_FAILURE,
} from '../../actions/types/review-requests';

const initialState = {
  isModalVisible: false,
  currentReviewRequest: {},
};

const reviewRequests = (state = initialState, action) => {
  switch (action && action.type) {
    case POST_REVIEW_REQUEST_SUCCESS:
      return {
        ...state,
      };

    case POST_REVIEW_REQUEST_FAILURE:
      console.log(action.payload);
      return {
        ...state,
      };

    case OPEN_MODAL:
      return {
        ...state,
        isModalVisible: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalVisible: false,
      };

    case GET_REVIEW_REQUEST_SUCCESS:
      return {
        ...state,
        currentReviewRequest: action.payload,
      };

    case GET_REVIEW_REQUEST_FAILURE:
      console.log(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reviewRequests;
