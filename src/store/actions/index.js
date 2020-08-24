/* eslint-disable import/prefer-default-export */
import { UPDATE_INITIAL_STATE } from './types';
import Service from '../../services/service';

const service = new Service();

const updateInitialState = () => {
  return function (dispatch) {
    service.getData().then((data) => {
      dispatch({
        type: UPDATE_INITIAL_STATE,
        payload: data,
      });
    });
  };
};

export { updateInitialState };
