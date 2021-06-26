import React from "react";
import "./Header.css";

//Initial states for messages on the header
const messageInitial = {
  dateFromInitial: "",
  dateToInitial: "Every date,",
  countryInitial: "all countries",
  roomsInitial: "all rooms",
  priceInitial: "all prices"
};
export function Header(props) {
  const headerMessage = () => {
    let messageReturned = `${messageInitial.dateFromInitial} ${messageInitial.dateToInitial} ${messageInitial.countryInitial}, ${messageInitial.priceInitial}, ${messageInitial.roomsInitial}. `;

    let dayFrom = new Date(props.dateFrom).getDate() + 1;
    let dayTo = new Date(props.dateTo).getDate() + 1;

    let MonthFrom = new Date(props.dateFrom).getMonth() + 1;
    let MonthTo = new Date(props.dateTo).getMonth() + 1;
    let yearFrom = new Date(props.dateFrom).getFullYear();
    let yearTo = new Date(props.dateFrom).getFullYear();

    function getAnyDate(M) {
      switch (M) {
        case 1:
          return "January";
        case 2:
          return "February";
        case 3:
          return "March";
        case 4:
          return "April";
        case 5:
          return "May";
        case 6:
          return "June";
        case 7:
          return "July";
        case 8:
          return "Agost";
        case 9:
          return "September";
        case 10:
          return "October";
        case 11:
          return "November";
        case 12:
          return "December";
        default:
          return null;
      }
    }

    if (props.dateFrom.length > 2) {
      messageInitial.dateFromInitial = `${getAnyDate(
        MonthFrom
      )} ${dayFrom} of ${yearFrom}`;
      messageInitial.dateToInitial = ",";

      if (props.dateTo.length > 2) {
        messageInitial.dateToInitial = ` ${getAnyDate(
          MonthTo
        )} ${dayTo} of ${yearTo}`;
        messageReturned = `${messageInitial.dateFromInitial} To ${messageInitial.dateToInitial}, ${messageInitial.countryInitial}, ${messageInitial.priceInitial}, ${messageInitial.roomsInitial}.`;
      }
    } else {
      messageInitial.dateFromInitial = "";
      messageInitial.dateToInitial = "Every date,";
    }
    //for countries only
    if (messageInitial.countryInitial !== "All a Countries") {
      messageInitial.countryInitial = props.countryH;
    } else {
      messageInitial.countryInitial = "All Countries";
    }

    //For prices only
    if (props.costH !== "all prices") {
      messageInitial.priceInitial = props.costH;
      if (messageInitial.priceInitial === "lowCost") {
        messageInitial.priceInitial = "Low Cost ($)";
      }
      if (messageInitial.priceInitial === "mediumCost") {
        messageInitial.priceInitial = "Medium Cost ($$)";
      }
      if (messageInitial.priceInitial === "highCost") {
        messageInitial.priceInitial = "High Cost ($$$)";
      }
      if (messageInitial.priceInitial === "Premium") {
        messageInitial.priceInitial = "Premium ($$$$)";
      }
    }
    //For Rooms Only
    if (messageInitial.roomsInitial !== "all rooms") {
      messageInitial.roomsInitial = props.roomsH;

      if (messageInitial.roomsInitial === "littleHotel") {
        messageInitial.roomsInitial = "Little Hotel";
      }
      if (messageInitial.roomsInitial === "mediumHotel") {
        messageInitial.roomsInitial = "Medium Hotel";
      }
      if (messageInitial.roomsInitial === "bigHotel") {
        messageInitial.roomsInitial = " Big Hotel";
      }
    } else {
      messageInitial.roomsInitial = "All Sizes";
    }
    return messageReturned;
  };
  return (
    <div className="Header-hotels">
      <div className="title">
        <h1> Hotel-s</h1>
      </div>

      <div className="paragraph-shedule">
        <p>{headerMessage()}</p>
      </div>
    </div>
  );
}

export default Header;
