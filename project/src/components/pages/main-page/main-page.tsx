import { useState } from 'react';
import { CITIES_NAME } from '../../../consts';
import Header from '../../header/header';
import Map from '../../map/map';
import Places from '../../places/places';
import Tabs from '../../tabs/tabs';

function MainPage(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>(CITIES_NAME[0]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={CITIES_NAME} setCurrentCity={setCurrentCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <Places currentCity={currentCity}/>
            <Map/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
