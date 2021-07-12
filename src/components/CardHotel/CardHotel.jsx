import React from "react";

import "../../Styles/CardHotel.css";
import "../../Styles/Prices.css";
import { showPrice } from "./showPrice";

export function CardHotel(props) {
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
        <span className="Price-Style"> {showPrice(props.price)}</span>
      </div>
      <button className="Reservation-button">Reserve</button>
    </div>
  );
}
