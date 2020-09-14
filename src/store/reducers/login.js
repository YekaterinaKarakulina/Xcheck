import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SET_USER_ROLES_SUCCESS,
  GET_USER_BY_GITHUBID_SUCCESS,
} from '../actions/types/login';
import { getRoles } from '../../utils';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  clientId: '3cdd93c64851d7e52a5d',
  redirectUri: 'http://localhost:8080/login',
  proxyUrl: 'http://localhost:5000/authenticate',
  loading: false,
  errorMessage: null,
  roles: getRoles(),
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
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: true,
        errorMessage: null,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    case SET_USER_ROLES_SUCCESS: {
      const roles = [...action.payload].join(',');
      localStorage.setItem('roles', JSON.stringify(roles));
      return {
        ...state,
        roles: action.payload,
      };
    }
    case GET_USER_BY_GITHUBID_SUCCESS: {
      return state;
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
