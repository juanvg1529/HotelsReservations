import CardHotel from "./CardHotel";
import { hotelsData } from "../data/data";

export default function Hotels() {
  return (
    <div className="Hotels-space-cards">
      {hotelsData.map(function (hotelData) {
        return (
          <CardHotel
            photo={hotelData.photo}
            name={hotelData.name}
            description={hotelData.description}
            rooms={hotelData.rooms}
            city={hotelData.city}
            country={hotelData.country}
            price={hotelData.price}
          />
        );
      })}
    </div>
  );
}
