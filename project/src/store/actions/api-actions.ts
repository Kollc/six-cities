import { errorHandle } from './../../services/error-handle';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { authData, HotelType, UserType } from '../../types/types';
import { APIRoute, AuthorizationStatus, NameSpace } from '../../consts';
import { resetHotelsError, setHotels } from '../hotels-data/hotels-data';
import { requireAuthorization, resetUser, resetUserError, setUser } from '../user-process/user-process';
import { dropToken, saveToken } from '../../services/token';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(resetHotelsError());
    try {
      const { data } = await api.get<HotelType[]>(APIRoute.Hotels);
      dispatch(setHotels(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const checkAuthAction  = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      // console.log(error);
    }
  },
);

export const loginAction = createAsyncThunk<void, authData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}: authData , {dispatch, extra: api}) => {
    dispatch(resetUserError());
    try {
      const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      errorHandle(error, dispatch, NameSpace.User);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(resetUser());
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      // console.log(error);
    }
  },
);
