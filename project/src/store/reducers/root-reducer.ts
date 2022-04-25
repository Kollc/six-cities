import { hotelsData } from './../hotels-data/hotels-data';
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { userProcess } from '../user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: hotelsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
