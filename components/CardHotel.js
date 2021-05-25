import React from "react";
function CardHotel(props) {
  return (
    <div className="Main-Card-Composition">
      <img src={props.photo} alt="Hotels-photos" />
      <div className="Card-Hotel-Info">
        <h2> {props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="Hotel-characteristics">
        <p className="ubication-info">
          {props.city},{props.country}
        </p>
        <span className="rooms-info"> {props.rooms}</span>
        <span className="price"> {props.price}</span>
      </div>
      <button className="Reservation-button"></button>
    </div>
  );
}
export default CardHotel;
