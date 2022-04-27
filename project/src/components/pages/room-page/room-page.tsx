import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelById } from '../../../services/api';
import { ErrorType, HotelType } from '../../../types/types';
import Header from '../../header/header';
import NearPlaces from '../../near-places/near-places';
import OfferGallery from '../../offer-gallery/offer-gallery';
import OfferProperty from '../../offer-property/offer-property';

function RoomPage(): JSX.Element {
  const [hotel, setHotel] = useState<HotelType | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    getHotelById(Number(id), setError).then((data) => {
      if(data) {
        setHotel(data);
        setLoading(false);
      }
    });
  }, [id]);

  if(loading || hotel === null) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error</div>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery hotel={hotel}/>
          <OfferProperty hotel={hotel}/>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <NearPlaces/>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
