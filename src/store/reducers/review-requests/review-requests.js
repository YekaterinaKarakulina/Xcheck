import {
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_REVIEW_REQUESTS_SUCCESS,
  GET_REVIEW_REQUESTS_FAILURE,
} from '../../actions/types/review-requests';

const initialState = {
  isModalVisible: false,
};

const reviewRequests = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUESTS_SUCCESS:
      return {
        ...state,
      };

    case GET_REVIEW_REQUESTS_FAILURE:
      console.log(action.payload);
      return state;

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

    default:
      return state;
  }
};

export default reviewRequests;
