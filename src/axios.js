import axios from 'axios';

export const axiosDB = axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'http://xcheck-team11-db.herokuapp.com/',
});

export const axiosAuth = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const axiosApp = axios.create({
  baseURL: 'http://localhost:8080/',
});
