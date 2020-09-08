import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from '../actions/types-old';

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.payload;

    case GET_USERS_FAILURE:
      console.log(action.payload);
      return state;

    case POST_USER_SUCCESS:
      return [...state, action.payload];

    case POST_USER_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default users;
