import "./styles.css";
import React, { useState } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Hotels from "../components/Hotels";
import { initialStates } from "../data/data";

export default function App() {
  /*initial states */
  //const [country, setCountry] = useState(initalStates.country);
  //const [cost, setCost] = useState(initalStates.cost);
  const [sizeRoom, setSizeRoom] = useState(initialStates.sizeRoom);

  const handleClickHotel = (evento) => {
    setSizeRoom(evento.target.value);
  };

  return (
    <div className="App">
      <Header />

      <Filters filterSizeRoom={sizeRoom} handleHotelroom={handleClickHotel} />
      <Hotels />
    </div>
  );
}
