import { useEffect, useRef, useState } from 'react';
import { SortHotelTypes, SortHotelTypesTitels } from '../../consts';

type SortPlacesProps = {
  sortType: SortHotelTypes,
  setSortType: (value: SortHotelTypes) => void,
}

function SortPlaces({sortType, setSortType}: SortPlacesProps): JSX.Element {
  const [openSortList, setOpenSortList] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleClickSortType = (typeSort: SortHotelTypes) => {
    setSortType(typeSort);
    setOpenSortList(false);
  };

  useEffect(() => {
    if(openSortList === false && formRef !== null) {
      document.addEventListener('click', (evt) => {
        const element = evt.target as Element;
        if(element.parentNode !== formRef.current) {
          setOpenSortList(false);
        }
      });
    }
  }, [openSortList, formRef]);

  return (
    <form className="places__sorting" action="#" method="get" ref={formRef}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenSortList(true)}>
        {SortHotelTypesTitels.get(sortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openSortList ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${sortType === SortHotelTypes.Popular && 'places__option--active'}`} tabIndex={0} onClick={() => handleClickSortType(SortHotelTypes.Popular)}>Popular</li>
        <li className={`places__option ${sortType === SortHotelTypes.LowToHigh && 'places__option--active'}`} onClick={() => handleClickSortType(SortHotelTypes.LowToHigh)}>Price: low to high</li>
        <li className={`places__option ${sortType === SortHotelTypes.HighToLow && 'places__option--active'}`} onClick={() => handleClickSortType(SortHotelTypes.HighToLow)}>Price: high to low</li>
        <li className={`places__option ${sortType === SortHotelTypes.TopRatedFirst && 'places__option--active'}`} onClick={() => handleClickSortType(SortHotelTypes.TopRatedFirst)}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortPlaces;
