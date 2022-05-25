import { AuthorizationStatus } from '../consts';
import { store } from '../store/store';
import { HotelType, UserType } from './types';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type HotelsDataType = {
  hotels: HotelType[],
  isLoadedHotels: boolean,
  error: string,
};

export type UserProcessType = {
  user: UserType | null,
  requireAuthorization: AuthorizationStatus,
  error: string,
};
