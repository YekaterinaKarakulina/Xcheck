import {
  POST_REVIEW_REQUEST_SUCCESS,
  POST_REVIEW_REQUEST_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../actions/types/review-requests';

const initialState = {
  // isRedirectToTableReady: false,
  // isRedirectToFormReady: false,
  isModalVisible: false,
};

const reviewRequests = (state = initialState, action) => {
  switch (action.type) {
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
