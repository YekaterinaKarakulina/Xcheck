/* eslint-disable import/prefer-default-export */
import { UPDATE_INITIAL_STATE } from './types';

const updateInitialState = () => {
  return {
    type: UPDATE_INITIAL_STATE,
    payload: {
      id: 1,
      data: 'test data',
    },
  };
};

export { updateInitialState };
