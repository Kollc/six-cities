type TabsProps = {
  setCurrentCity: (value: string) => void,
  cities: string[],
}

function Tabs({setCurrentCity, cities}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a className="locations__item-link tabs__item" onClick={() => setCurrentCity(city)}>
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
