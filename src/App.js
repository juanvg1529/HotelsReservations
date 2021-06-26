import "./styles.css";
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import { CardHotel } from "../src/components/CardHotel/CardHotel";
import { hotelsData, initialStates } from "../public/data/data";

export default function App() {
  /*initial states */
  //initial state of Country
  const [country, setCountry] = useState(initialStates.countryState);
  //initial state of Price
  const [price, setPrice] = useState(initialStates.priceState);
  //initial state of Rooms
  const [rooms, setRooms] = useState(initialStates.roomsState);
  //initial state of the date of availability From
  const [datesBefore, setDatesBefore] = useState(initialStates.datesState);
  //initial state of the date of availability To
  const [datesAfter, setDatesAfter] = useState(initialStates.datesState);

  /**
   * Event Handlers
   */
  //event handler for countries
  const handleClickCountry = (newEvent) => {
    setCountry(newEvent.target.value);
  };
  //event handler for Prices
  const handleClickPrice = (newEvent) => {
    setPrice(newEvent.target.value);
  };
  //event handler for Rooms
  const handleClickRooms = (newEvent) => {
    setRooms(newEvent.target.value);
  };
  //event handler for the date of of availability From
  const handleClickDateBefore = (newEvent) => {
    setDatesBefore(newEvent.target.value);
  };
  //event handler for the date of of availability To
  const handleClickDateAFter = (newEvent) => {
    setDatesAfter(newEvent.target.value);
  };

  // /*FUNCTION THAT RESET ALL PARAMETERS */
  const resetFilters = () => {
    setCountry(initialStates.countryState);
    setPrice(initialStates.priceState);
    setRooms(initialStates.roomsState);
    setDatesBefore(initialStates.datesState);
    setDatesAfter(initialStates.datesState);
  };
  const dateFrom = new Date(datesBefore).getTime(); //first date
  const dateTo = new Date(datesAfter).getTime(); //second date

  //function that displays the alert
  function dateAlert(dateFrom, dateTo) {
    let dateMessage =
      "The date from, must be inferior than the date to choose . Please try it again.";
    if (dateTo !== initialStates.datesStateTo && dateTo < dateFrom) {
      alert(dateMessage);
    }
  }
  // /**
  //  * filters
  //  */

  const NewfilteredList = (props, dateFrom, dateTo) => {
    const nuevaLista = hotelsData
      .filter((parameter) => {
        //filter of the dates
        const dateFrom = new Date(datesBefore).getTime(); //first date
        const dateTo = new Date(datesAfter).getTime(); //second date

        if (datesBefore <= 0 && datesAfter <= 0) {
          return parameter;
        }
        if (datesBefore && datesAfter) {
          if (datesBefore <= datesAfter) {
            const hotelDates =
              dateFrom <= parameter.availabilityTo &&
              dateTo >= parameter.availabilityFrom;
            return hotelDates;
          } else {
            setDatesAfter("");
            setDatesBefore("");
          }
        }
        return parameter;
      })

      .filter((parameter) => {
        //filter of the countries

        if (country === initialStates.countryState) {
          return parameter;
        }
        if (country !== initialStates.countryState) {
          return parameter.country === country;
        }
        return parameter;
      })
      .filter((parameter) => {
        //filter of the prices

        let roomCost = 0;
        if (price !== initialStates.priceState) {
          if (price === "lowCost") {
            roomCost = 1;
          } else if (price === "mediumCost") {
            roomCost = 2;
          } else if (price === "highCost") {
            roomCost = 3;
          } else if (price === "Premium") {
            roomCost = 4;
          }
          return parameter.price === roomCost;
        }
        return parameter;
      })

      .filter((parameter) => {
        //filter of the rooms
        if (rooms === initialStates.roomsState) {
          return parameter;
        } else if (rooms === "littleHotel") {
          return parameter.rooms <= 10;
        } else if (rooms === "mediumHotel") {
          return parameter.rooms >= 10 && parameter.rooms <= 20;
        } else if (rooms === "bigHotel") {
          return parameter.rooms > 20;
        }
        return parameter;
      });
    return nuevaLista;
  };
  let filteredList = NewfilteredList(dateFrom, dateTo);
  dateAlert(dateFrom, dateTo); //here I called the Alert function

  return (
    <div className="App">
      <Header
        dateFrom={datesBefore}
        dateTo={datesAfter}
        countryH={country}
        costH={price}
        roomsH={rooms}
      />

      <Filters
        dayBefore={datesBefore}
        setDatesBeforeF={setDatesBefore}
        onChangeDatesBefore={handleClickDateBefore}
        dayAfter={datesAfter}
        setDatesAfterF={setDatesAfter}
        onChangeDateAfter={handleClickDateAFter}
        countryF={country}
        initialStateCountry={initialStates.countryState}
        onChangeCountry={handleClickCountry}
        priceF={price}
        initialStatePrice={initialStates.priceState}
        onChangePrice={handleClickPrice}
        roomsF={rooms}
        initialStateRooms={initialStates.roomsState}
        onChangeRooms={handleClickRooms}
        resetF={resetFilters}
      />

      <div className="Hotels-space-cards">
        {filteredList.length > 0 ? (
          filteredList.map(function (hotelData) {
            return (
              <CardHotel
                key={hotelData.slug}
                photo={hotelData.photo}
                name={hotelData.name}
                description={hotelData.description}
                rooms={hotelData.rooms}
                city={hotelData.city}
                country={hotelData.country}
                price={hotelData.price}
              />
            );
          })
        ) : (
          <p className="ResponseParagraph"> No foundings, try again.</p>
        )}
      </div>
    </div>
  );
}
