import React from "react";
import "../../Styles/Header.css";
import { headerMessage } from "./headerMessage";

//Initial states for messages on the header

export function Header(props) {
  let dateFromH = props.dateFrom;
  let dateToH = props.dateTo;
  let costH = props.costH;
  let roomsH = props.roomsH;
  let countryH = props.countryH;
  let message = headerMessage(dateFromH, dateToH, costH, roomsH, countryH);

  return (
    <header className="Header-hotels">
      <div className="title">
        <h1> Hotel-s</h1>
      </div>

      <div className="paragraph-shedule">
        <p>{message}</p>
      </div>
    </header>
  );
}

export default Header;
