import { SortHotelTypes, SortHotelTypesTitels } from '../../consts';

type SortPlacesProps = {
  sortType: SortHotelTypes,
  setSortType: (value: SortHotelTypes) => void,
}

function SortPlaces({sortType, setSortType}: SortPlacesProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {SortHotelTypesTitels.get(sortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className={`places__option ${sortType === SortHotelTypes.Popular && 'places__option--active'}`} tabIndex={0} onClick={() => setSortType(SortHotelTypes.Popular)}>Popular</li>
        <li className={`places__option ${sortType === SortHotelTypes.LowToHigh && 'places__option--active'}`} onClick={() => setSortType(SortHotelTypes.LowToHigh)}>Price: low to high</li>
        <li className={`places__option ${sortType === SortHotelTypes.HighToLow && 'places__option--active'}`} onClick={() => setSortType(SortHotelTypes.HighToLow)}>Price: high to low</li>
        <li className={`places__option ${sortType === SortHotelTypes.TopRatedFirst && 'places__option--active'}`} onClick={() => setSortType(SortHotelTypes.TopRatedFirst)}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortPlaces;
