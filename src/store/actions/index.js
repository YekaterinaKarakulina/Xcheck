import { UPDATE_INITIAL_STATE, GET_USERS } from './types';

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

export { updateInitialState, getUsers };
