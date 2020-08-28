import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { UPDATE_INITIAL_STATE } from '../actions/types';

const initialState = {
  testData: {},
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INITIAL_STATE:
      return {
        ...state,
        testData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default combineReducers({
  reducer,
  form: reduxFormReducer,
});
