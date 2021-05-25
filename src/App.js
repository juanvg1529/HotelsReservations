import "./styles.css";
import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Hotels from "../components/Hotels";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Hotels />
    </div>
  );
}
