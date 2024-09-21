import axios from 'axios';

export const API_HOST = 'http://localhost:8888';

export const customAxios = () => {
  const instance = axios.create({
    baseURL: API_HOST,
    withCredentials: false,
  });

  return instance;
};
