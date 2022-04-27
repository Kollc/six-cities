import { PERCENTAGE_MULTIPLIER } from '../../consts';
import { HotelType } from '../../types/types';
import FeaturesInside from '../features-inside/features-inside';
import Host from '../host/host';

type OfferPropertyProps = {
  hotel: HotelType,
}

function OfferProperty({hotel}: OfferPropertyProps): JSX.Element {
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {
          hotel.isPremium
           &&
          <div className="property__mark">
            <span>Premium</span>
          </div>
        }
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {hotel.title}
          </h1>
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `${hotel.rating * PERCENTAGE_MULTIPLIER}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{hotel.rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {hotel.type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {hotel.bedrooms} Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
            Max {hotel.maxAdults} adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;{hotel.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <FeaturesInside goods={hotel.goods}/>
        </div>
        <Host host={hotel.host}/>
        <section className="property__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  Max
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default OfferProperty;
