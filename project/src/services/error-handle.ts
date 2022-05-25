import { setUserError } from './../store/user-process/user-process';
import { setHotelsError } from './../store/hotels-data/hotels-data';
import { AppDispatch } from '../types/state';
import { ErrorType } from '../types/types';
import request from 'axios';
import { NameSpace } from '../consts';

export const errorHandle = (error: ErrorType, dispatch: AppDispatch, reducerName: NameSpace): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (reducerName) {
      case NameSpace.User:
        dispatch(setUserError(response.data.error));
        break;

      case NameSpace.Data:
        dispatch(setHotelsError(response.data.error));
        break;

      default:
        dispatch(setHotelsError(response.data.error));
        break;
    }
  }
};
