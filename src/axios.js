import axios from 'axios';
import env from './env';

export const axiosDB = axios.create({
  baseURL: env.dbBaseURL,
});

export const axiosAuth = axios.create({
  baseURL: env.authBaseURL,
});

export const axiosApp = axios.create({
  baseURL: env.appBaseURL,
});
