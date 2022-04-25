import { NameSpace } from './../../consts';
import { State } from '../../types/state';
import { HotelType } from '../../types/types';

export const getHotels = (state: State): HotelType[] => state[NameSpace.Data].hotels;
