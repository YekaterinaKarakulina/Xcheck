import { UPDATE_INITIAL_STATE, GET_USERS, POST_USER } from './types';

const updateInitialState = () => {
  return {
    type: UPDATE_INITIAL_STATE,
    payload: {
      id: 1,
      data: 'test data',
    },
  };
};

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

export { updateInitialState, getUsers, postUser };
