import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  clientId: '3cdd93c64851d7e52a5d',
  redirectUri: 'http://localhost:8080/login',
  clientSecret: '5e7c3eb366144c3855ecd06394de075dd5b72322',
  proxyUrl: 'http://localhost:5000/authenticate',
  loading: false,
  errorMessage: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      console.log(action.payload.user);
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        loading: false,
        errorMessage: null,
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
      };
    }
    default:
      return state;
  }
};

export default login;
