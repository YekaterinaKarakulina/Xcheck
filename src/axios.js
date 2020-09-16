import axios from 'axios';

export const axiosDB = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'http://xcheck-team11-db.herokuapp.com/',
});

export const axiosAuth = axios.create({
  baseURL: 'http://localhost:5000/',
  // baseURL: 'https://xcheck-team11-auth.herokuapp.com/',
});

export const axiosApp = axios.create({
  baseURL: 'http://localhost:8080/',
});
