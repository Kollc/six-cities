import { ValidationFieldType } from './../consts';
import { SortHotelTypes } from '../consts';
import { HotelType } from '../types/types';

export const getCities = (hotels: HotelType[]): string[] => {
  const cities = new Set([...hotels.map((hotel) => hotel.city.name)]);
  return [...cities];
};

export const filterHotelsByCity = (city: string, hotels: HotelType[]): HotelType[]  => hotels.filter((hotel) => hotel.city.name === city);

export const sortHotelsList = (typeSort: SortHotelTypes, hotels: HotelType[]): HotelType[]  => {
  switch (typeSort) {
    case SortHotelTypes.LowToHigh:
      return hotels.sort((prev, next) => prev.price - next.price);
    case SortHotelTypes.HighToLow:
      return hotels.sort((prev, next) => next.price - prev.price);
    case SortHotelTypes.TopRatedFirst:
      return hotels.sort((prev, next) => Math.floor(next.rating - prev.rating));
    default:
      return hotels;
  }
};

export const checkFieldIsNotEmpty = (value: string) => {
  if(value === '') {
    return ValidationFieldType.Empty;
  }

  return ValidationFieldType.NotError;
};

export const checkPasswordFieldFormat = (value: string) => {
  if(value === '') {
    return ValidationFieldType.Empty;
  } else if(!(/(?=.*\d)(?=.*[a-z])/i.test(value))) {
    return ValidationFieldType.PasswordFormatInvalid;
  }

  return ValidationFieldType.NotError;
};
