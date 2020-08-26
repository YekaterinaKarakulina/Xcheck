import { UPDATE_INITIAL_STATE, GET_USERS_SUCCESS, POST_USER_SUCCESS } from '../actions/types';

const initialState = {
  testData: {},
  loading: true,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INITIAL_STATE:
      return {
        ...state,
        testData: action.payload,
        loading: false,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case POST_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
