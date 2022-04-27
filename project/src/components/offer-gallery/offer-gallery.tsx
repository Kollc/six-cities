import { COUNT_SHOW_PHOTO_HOTEL } from '../../consts';
import { HotelType } from '../../types/types';

type OfferGalleryProps = {
  hotel: HotelType,
}

function OfferGallery({hotel}: OfferGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {hotel.images.slice(0, COUNT_SHOW_PHOTO_HOTEL).map((img) => (
          <div className="property__image-wrapper" key={img}>
            <img className="property__image" src={img} alt={`Photo ${hotel.title}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
