import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SET_USER_ROLES,
} from '../actions/types-old';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  clientId: '3cdd93c64851d7e52a5d',
  redirectUri: 'http://localhost:8080/login',
  proxyUrl: 'http://localhost:5000/authenticate',
  loading: false,
  errorMessage: null,
  roles: JSON.parse(localStorage.getItem('roles')) || [],
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        loading: true,
        errorMessage: null,
      };
    }
    case SET_USER_ROLES: {
      localStorage.setItem('roles', JSON.stringify(action.payload.roles));
      return {
        ...state,
        roles: action.payload.roles,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    case LOGOUT_SUCCESS: {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
        errorMessage: null,
        roles: [],
      };
    }
    default:
      return state;
  }
};

export default login;
