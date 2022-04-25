import { HotelType } from '../../types/types';
import PlacesItem from '../places-item/places-item';

type PlacesListProps = {
  hotels: HotelType[],
}

function PlacesList({hotels}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) => <PlacesItem key={hotel.id} hotel={hotel}/>)}
    </div>
  );
}

export default PlacesList;
