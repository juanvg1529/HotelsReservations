export const showPrice = (Price) => {
  if (Price === 1) {
    return (
      <p className="priceStyleRegular">
        $ <span className="priceStyleRegular-itsOFF"> $ $ $ </span>
      </p>
    );
  }

  if (Price === 2) {
    return (
      <p className="priceStyleRegular">
        $ $ <span className="priceStyleRegular-itsOFF"> $ $ </span>
      </p>
    );
  }
  if (Price === 3) {
    return (
      <p className="priceStyleRegular">
        $ $ $ <span className="priceStyleRegular-itsOFF"> $ </span>
      </p>
    );
  } else {
    return <p className="priceStyleRegular">$ $ $ $ </p>;
  }
};
