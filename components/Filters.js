import React from "react";
import { initalStates } from "../data/data";

function Filters(props) {
  // const handleSize = () => {
  //   props.handleSize(props.handleHotelroom);
  // };

  return (
    <div className="filters-styles">
      <div className="Dates">
        <input type="date" />

        <input type="date" />
      </div>
      <div className="selects">
        <select name="categories" id="Countries">
          <option value={initalStates}>{initalStates}</option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="chile">Chile</option>
        </select>
        <select name="categories" id="Cost-room">
          <option value={props.initalStates}>{props.initalStates}</option>
          <option value="lowCost">low cost ($)</option>
          <option value="mediumCost">medium cost($$)</option>
          <option value="highCost">high cost($$$)</option>
          <option value="Premium">Premium($$$$)</option>
        </select>
        <select
          name="categories"
          id="number-of-bedrooms"
          onChange={props.handleHotelroom}
          value={props.filterSizeRoom}
        >
          <option value={props.sizeRoom}>{props.sizeRoom}</option>
          <option value={props.rooms}>Little hotel</option>
          <option value="mediumHotel">Medium hotel</option>
          <option value="bigHotel">big hotel </option>
        </select>
        <button className="reset-button"> RESET</button>
      </div>
    </div>
  );
}

export default Filters;
