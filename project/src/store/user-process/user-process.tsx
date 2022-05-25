import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { UserProcessType } from '../../types/state';

const initialState: UserProcessType = {
  user: null,
  requireAuthorization: AuthorizationStatus.Unknown,
  error: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.requireAuthorization = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    resetUserError: (state) => {
      state.error = '';
    },
  },
});

export const {requireAuthorization, setUser, resetUser, setUserError, resetUserError} = userProcess.actions;
