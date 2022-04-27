export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const BASE_URL = 'https://9.react.pages.academy/six-cities';
export const TIMEOUT_SERVER = 5000;

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export const CITIES_NAME = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum SortHotelTypes {
  Popular = 'POPULAR',
  LowToHigh = 'LOW_TO_HIGH',
  HighToLow = 'HIGH_TO_LOW',
  TopRatedFirst = 'RATED',
}

export const SortHotelTypesTitels =  new Map([
  [SortHotelTypes.Popular, 'Popular'],
  [SortHotelTypes.LowToHigh, 'Price: low to high'],
  [SortHotelTypes.HighToLow, 'Price: high to low'],
  [SortHotelTypes.TopRatedFirst, 'Top rated first'],
]);

export const PERCENTAGE_MULTIPLIER = 20;

export const COUNT_SHOW_PHOTO_HOTEL  = 6;
