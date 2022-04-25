import { useEffect, useState } from 'react';
import { SortHotelTypes } from '../../consts';
import { useAppSelector } from '../../hooks/hooks';
import { getHotels } from '../../store/hotels-data/selectors';
import { HotelType } from '../../types/types';
import { filterHotelsByCity, sortHotelsList } from '../../utils/utils';
import PlacesList from '../places-list/places-list';
import SortPlaces from '../sort-places/sort-places';

type PlacesProps = {
  currentCity: string,
}

function Places({currentCity}: PlacesProps): JSX.Element {
  const hotels = useAppSelector(getHotels);
  const [sortType, setSortType] = useState<SortHotelTypes>(SortHotelTypes.Popular);
  const [sortHotels, setSortHotels] = useState<HotelType[]>([]);

  useEffect(() => {
    setSortHotels(sortHotelsList(sortType, filterHotelsByCity(currentCity, hotels)));
  }, [sortType, currentCity, hotels]);

  if(!hotels) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortHotels.length} places to stay in {currentCity}</b>
      <SortPlaces sortType={sortType} setSortType={setSortType}/>
      <PlacesList hotels={sortHotels}/>
    </section>
  );
}

export default Places;
