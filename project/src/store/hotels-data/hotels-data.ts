import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { HotelsDataType } from '../../types/state';

const initialState: HotelsDataType = {
  hotels: [],
  isLoadedHotels: false,
  error: '',
};

export const hotelsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
      state.isLoadedHotels = true;
    },
    setHotelsError: (state, action) => {
      state.error = action.payload;
    },
    resetHotelsError: (state) => {
      state.error = '';
    },
  },
});

export const {setHotels, setHotelsError, resetHotelsError} = hotelsData.actions;

