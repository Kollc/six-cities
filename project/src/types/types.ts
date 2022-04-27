export type City = {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string
};

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type HotelType = {
    bedrooms: number,
    city: City,
    description: string,
    goods: [string],
    host: Host,
    id: number,
    images: [string],
    isFavorite: boolean,
    isPremium: boolean,
    location: Location,
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string,
};

export type UserType = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
};

export type authData = {
  email: string,
  password: string,
};

export type ErrorType = unknown;

export type HostType = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
};
