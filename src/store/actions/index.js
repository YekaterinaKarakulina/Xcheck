import { GET_USERS, POST_USER } from './types-old';

const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

const postUser = (newUser) => {
  return {
    type: POST_USER,
    payload: newUser,
  };
};

export { getUsers, postUser };
