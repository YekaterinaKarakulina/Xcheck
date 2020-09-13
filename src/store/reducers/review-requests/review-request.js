import { formValueSelector } from 'redux-form';

const selector = formValueSelector('reviewRequest');

const reviewRequest = (state = {}, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        hasChoiceCrossCheckSession: selector(state, 'hasChoiceCrossCheckSession'),
      };
  }
};

export default reviewRequest;
