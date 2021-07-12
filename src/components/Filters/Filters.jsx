import React from "react";
import "../../Styles/Filters.css";
import { DatesComponent } from "./FilterComponents/DatesComponent";
import CountriesComponent from "./FilterComponents/CountriesComponent";
import CostComponent from "./FilterComponents/CostComponent";
import RoomsComponent from "./FilterComponents/RoomsComponent";
import ButtonReset from "./FilterComponents/ButtonReset";

export function Filters(props) {
  return (
    <form className="filters-styles">
      <DatesComponent
        valueDayBefore={props.dayBefore}
        onChangeDayBefore={props.onChangeDatesBefore}
        valueDayAfter={props.dayAfter}
        onChangeDayAfter={props.onChangeDateAfter}
      />

      <div className="selects">
        <CountriesComponent
          valueCountry={props.countryF}
          onChangeCoountryComponent={props.onChangeCountry}
          initialState={props.initialStateCountry}
        />
        <CostComponent
          valueCost={props.priceF}
          onChange={props.onChangePrice}
          initialState={props.initialStatePrice}
        />
        <RoomsComponent
          valueRooms={props.roomsF}
          onChange={props.onChangeRooms}
          initialState={props.initialStateRooms}
        />
        <ButtonReset onClick={props.resetF} />
      </div>
    </form>
  );
}
