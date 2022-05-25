import { NameSpace } from './../../consts';
import { State } from '../../types/state';
import { HotelType } from '../../types/types';

export const getHotels = (state: State): HotelType[] => state[NameSpace.Data].hotels;
export const getHotelsLoadedStatus = (state: State): boolean => state[NameSpace.Data].isLoadedHotels;
export const getHotelsError = (state: State): string => state[NameSpace.Data].error;
