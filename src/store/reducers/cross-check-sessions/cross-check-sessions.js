import {
  GET_CROSSCHECK_SESSION_SUCCESS,
  GET_CROSSCHECK_SESSION_FAILURE,
  POST_CROSSCHECK_SESSION_SUCCESS,
  POST_CROSSCHECK_SESSION_FAILURE,
  UPDATE_CROSSCHECK_SESSION_SUCCESS,
  UPDATE_CROSSCHECK_SESSION_FAILURE,
  DELETE_CROSSCHECK_SESSION_SUCCESS,
  DELETE_CROSSCHECK_SESSION_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../actions/types/cross-check-sessions';

const initialState = {
  isModalVisible: false,
  currentSessionInfo: {},
};

const crossCheckSessions = (state = initialState, action) => {
  switch (action && action.type) {
    case GET_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
        currentSessionInfo: {
          ...action.payload,
        },
      };

    case GET_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case POST_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
      };

    case POST_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case UPDATE_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
      };

    case UPDATE_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case DELETE_CROSSCHECK_SESSION_SUCCESS:
      return {
        ...state,
      };

    case DELETE_CROSSCHECK_SESSION_FAILURE:
      console.log(action.payload);
      return state;

    case OPEN_MODAL:
      return {
        ...state,
        isModalVisible: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalVisible: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default crossCheckSessions;
