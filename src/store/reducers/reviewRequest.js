import { formValueSelector } from 'redux-form';
import { POST_REVIEWS_REQUEST_SUCCESS, POST_REVIEWS_REQUEST_FAILURE } from '../actions/types-old';

const selector = formValueSelector('reviewRequest');

const reviewRequest = (state = [], action) => {
  const hasChoiceСrossCheckSession = selector(state, 'сhoiceСrossCheckSession');
  switch (action.type) {
    case POST_REVIEWS_REQUEST_SUCCESS:
      return {
        state: action.payload,
        hasChoiceСrossCheckSession,
      };

    case POST_REVIEWS_REQUEST_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        hasChoiceСrossCheckSession,
      };

    default:
      return {
        ...state,
        hasChoiceСrossCheckSession,
      };
  }
};

export default reviewRequest;
