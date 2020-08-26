import { GET_USERS_SUCCESS, POST_USER_SUCCESS } from '../actions/types';

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.payload;

    case POST_USER_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default users;
