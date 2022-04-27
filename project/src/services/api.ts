import { APIRoute, BASE_URL, TIMEOUT_SERVER } from './../consts';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { ErrorType, HotelType } from '../types/types';

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

export const getHotelById = async (id: number, setError: (error: ErrorType) => void) => {
  const api = createApi();

  try {
    const {data} =  await api.get<HotelType>(`${APIRoute.Hotels}/${id}`);
    return data;
  } catch (error) {
    setError(error);
  }
} ;
