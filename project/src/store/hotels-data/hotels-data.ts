import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { HotelsDataType } from '../../types/state';

const initialState: HotelsDataType = {
  hotels: [],
  isLoadedHotels: false,
};

export const hotelsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
      state.isLoadedHotels = true;
    },
  },
});

export const {setHotels} = hotelsData.actions;

