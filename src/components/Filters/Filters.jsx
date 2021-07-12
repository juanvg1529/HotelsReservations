import React from "react";
import "../../Styles/Filters.css";
import { Dates } from "./FilterComponents/Dates";
export function Filters(props) {
  return (
    <form className="filters-styles">
      <Dates
        valueDayBefore={props.dayBefore}
        onChangeDayBefore={props.onChangeDatesBefore}
        valueDayAfter={props.dayAfter}
        onChangeDayAfter={props.onChangeDateAfter}
      />

      <div className="selects">
        <select
          name="categories"
          id="Countries"
          value={props.countryF}
          onChange={props.onChangeCountry}
        >
          <option value={props.initialStateCountry}>
            {props.initialStateCountry}
          </option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brazil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>

        <select
          name="categories"
          id="Cost-room"
          value={props.priceF}
          onChange={props.onChangePrice}
        >
          <option value={props.initialStatePrice}>
            {props.initialStatePrice}
          </option>
          <option value="lowCost">low cost ($)</option>
          <option value="mediumCost">medium cost($$)</option>
          <option value="highCost">high cost($$$)</option>
          <option value="Premium">Premium($$$$)</option>
        </select>
        <select
          name="categories"
          id="number-of-bedrooms"
          value={props.roomsF}
          onChange={props.onChangeRooms}
        >
          <option value={props.initialStateRooms}>
            {props.initialStateRooms}
          </option>
          <option value="littleHotel">Little hotel</option>
          <option value="mediumHotel">Medium hotel</option>
          <option value="bigHotel">big hotel </option>
        </select>

        <button onClick={props.resetF} className="reset-button">
          {" "}
          RESET
        </button>
      </div>
    </form>
  );
}
