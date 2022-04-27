type FeaturesInsideProps = {
  goods: string[],
}

function FeaturesInside({goods}: FeaturesInsideProps):JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((good) => (
        <li className="property__inside-item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
}

export default FeaturesInside;
