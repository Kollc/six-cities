import { BASE_URL, TIMEOUT_SERVER } from './../consts';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );


  return api;
};
