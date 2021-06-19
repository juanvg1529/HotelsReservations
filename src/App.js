import "./styles.css";
import React, { useState } from "react";
//import CardHotel from "../components/CardHotel";

import Header from "../src/components/Header";
import { hotelsData } from "../src/data/data";

const initialStates = {
  countryState: "Choose a country",
  priceState: "Choose a cost",
  roomsState: "Choose a size",
  datesStateFrom: " ",
  datesStateTo: " "
};
const datesStateDrop = initialStates.datesStateFrom;

function dateAlert(dateFrom, dateTo) {
  let dateMessage =
    "The check out date must be inferior than the check in date. Please try it again.";
  if (dateTo !== datesStateDrop && dateTo < dateFrom) {
    alert(dateMessage);
  }
}

export default function App() {
  /*initial states */

  const [country, setCountry] = useState(initialStates.countryState);
  const [price, setPrice] = useState(initialStates.priceState);
  const [rooms, setRooms] = useState(initialStates.roomsState);

  const [datesBefore, setDatesBefore] = useState(initialStates.datesStateFrom);
  const [datesAfter, setDatesAfter] = useState(initialStates.datesStateTo);
  console.log(datesAfter, datesBefore);
  console.log(setDatesBefore);

  /**
   * Event Handlers
   */
  const handleClickCountry = (newEvent) => {
    setCountry(newEvent.target.value);
  };

  const handleClickPrice = (newEvent) => {
    setPrice(newEvent.target.value);
  };
  const handleClickRooms = (newEvent) => {
    setRooms(newEvent.target.value);
  };
  const handleClickDateBefore = (newEvent) => {
    setDatesBefore(newEvent.target.value);
  };
  const handleClickDateAFter = (newEvent) => {
    setDatesAfter(newEvent.target.value);
  };
  /*FUNCTION THAT RESET ALL PARAMETERS */
  const resetFilters = () => {
    setCountry(initialStates.countryState);
    setPrice(initialStates.priceState);
    setRooms(initialStates.roomsState);
    setDatesBefore(initialStates.datesStateFrom);
    setDatesAfter(initialStates.datesStateTo);
  };
  /**
   * filters
   */
  const NewfilteredList = (props) => {
    const nuevaLista = hotelsData

      .filter((parameter) => {
        //console.log(parameter.availabilityFrom);

        const dateFrom = new Date(datesBefore).getTime(); //first date
        const dateTo = new Date(datesAfter).getTime(); //second date
        // console.log(`the date froms ${dateFrom}`);
        // console.log(`the date to${dateTo}`);
        if (datesBefore <= 0 && datesAfter <= 0) {
          return parameter;
        }
        if (datesBefore && datesAfter) {
          if (datesBefore <= datesAfter) {
            const hotelDates =
              dateFrom <= parameter.availabilityTo &&
              dateTo >= parameter.availabilityFrom;

            return hotelDates;
          }
        }
        return parameter;
      })

      .filter((parameter) => {
        //country filter
        if (country === initialStates.countryState) {
          return parameter;
        }
        if (country !== initialStates.countryState) {
          return parameter.country === country;
        }
        return parameter;
      })
      .filter((parameter) => {
        //cost filter

        let roomCost = 0;
        // if (price !== initialStates.priceState) {
        //   return parametro;
        // }
        if (price !== initialStates.priceState) {
          // console.log(parameter.price, price);

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
        // console.log(parameter);
        return parameter;
      })
      .filter((parameter) => {
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

    console.log(nuevaLista);
    return nuevaLista;
  };

  let filteredList = NewfilteredList();

  dateAlert(datesBefore, datesBefore);
  // console.log(filteredList);
  // console.log(filteredList.length);

  return (
    <div className="App">
      <Header />

      <div className="filters-styles">
        <div className="Dates">
          <input
            type="date"
            value={datesBefore}
            onChange={handleClickDateBefore}
          />

          <input
            type="date"
            value={datesAfter}
            onChange={handleClickDateAFter}
          />
        </div>
        <div className="selects">
          <select
            name="categories"
            id="Countries"
            value={country}
            onChange={handleClickCountry}
          >
            <option value={initialStates.countryState}>
              {initialStates.countryState}
            </option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>

          <select
            name="categories"
            id="Cost-room"
            value={price}
            onChange={handleClickPrice}
          >
            <option value={initialStates.priceState}>
              {initialStates.priceState}
            </option>
            <option value="lowCost">low cost ($)</option>
            <option value="mediumCost">medium cost($$)</option>
            <option value="highCost">high cost($$$)</option>
            <option value="Premium">Premium($$$$)</option>
          </select>
          <select
            name="categories"
            id="number-of-bedrooms"
            value={rooms}
            onChange={handleClickRooms}
          >
            <option value={initialStates.roomState}>
              {initialStates.roomsState}
            </option>
            <option value="littleHotel">Little hotel</option>
            <option value="mediumHotel">Medium hotel</option>
            <option value="bigHotel">big hotel </option>
          </select>
          <button onClick={resetFilters} className="reset-button">
            {" "}
            RESET
          </button>
        </div>
      </div>

      <div className="Hotels-space-cards">
        {filteredList.length > 0
          ? filteredList.map(function (hotelData) {
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
          : "No Foundings"}
      </div>
    </div>
  );
}

function CardHotel(props) {
  return (
    <div className="Main-Card-Composition">
      <div className="title-photo-hotel">
        <img className="hotel-photos" src={props.photo} alt="Hotels-photos" />
      </div>
      <div className="Hotel-name">
        <h2> {props.name}</h2>
      </div>

      <div className="Hotel-description">
        <p className="Hotel-description-paragraph">{props.description}</p>
      </div>

      <div className="Hotel-characteristics">
        <p className="ubication-info">
          <img
            className="icon-ubication"
            alt="icon"
            src="https://i.imgur.com/RDc8rKY.png"
          />
          {props.city}, {props.country}
        </p>
        <div className="rooms-info">
          <img
            className="bed"
            alt="bed"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwb2x5Z29uIHBvaW50cz0iNjAsMjg2IDYwLDc2IDAsNzYgMCw0MzYgNjAsNDM2IDYwLDM3NiA0NTIsMzc2IDQ1Miw0MzYgNTEyLDQzNiA1MTIsMzc2IDUxMiwyODYgCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTEzNSwxNjZjLTI0Ljg1MywwLTQ1LDIwLjE0Ny00NSw0NXY0NWg5MHYtNDVDMTgwLDE4Ni4xNDcsMTU5Ljg1MywxNjYsMTM1LDE2NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ2NywxNjZIMjU1Yy0yNC44NTMsMC00NSwyMC4xNDctNDUsNDV2NDVoMzAydi00NUM1MTIsMTg2LjE0Nyw0OTEuODUzLDE2Niw0NjcsMTY2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
          />
          <p>{props.rooms} Rooms</p>
        </div>
      </div>
      <div className="price">
        <span>$$ {props.price}</span>
      </div>
      <button className="Reservation-button">Reservar</button>
    </div>
  );
}
