import React from "react";

function Filters(props) {
  const handleSize = () => {
    props.handleSize(props.handleHotelroom);
  };

  return (
    <div className="filters-styles">
      <div className="Dates">
        <input type="date" />

        <input type="date" />
      </div>
      <div className="selects">
        <select name="categories" id="Countries">
          <option value="allCountries">--Choose a country---</option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="chile">Chile</option>
        </select>
        <select name="categories" id="Cost-room">
          <option value="organizacion">--Choose a cost--</option>
          <option value="organizacion">low cost ($)</option>
          <option value="negocio">medium cost($$)</option>
          <option value="salud">high cost($$$)</option>
          <option value="estudios">Premium($$$$)</option>
        </select>
        <select
          name="categories"
          id="number-of-bedrooms"
          onChange={handleSize}
          value={props.filterSizeRoom}
        >
          <option value="allHotels">--Choose a hotel--</option>
          <option value="littleHotel">Little hotel</option>
          <option value="mediumHotel">Medium hotel</option>
          <option value="bigHotel">big hotel </option>
        </select>
        <button className="reset-button"> RESET</button>
      </div>
    </div>
  );
}

export default Filters;
