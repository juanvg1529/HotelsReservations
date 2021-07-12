export const newfilteredList = (
  hotelsData,
  dateFrom,
  dateTo,
  datesAfter,
  datesBefore,
  setDatesAfter,
  setDatesBefore,
  country,
  price,
  rooms,
  countryState,
  priceState,
  roomsState
) => {
  const nuevaLista = hotelsData
    .filter((parameter) => {
      //filter of the dates
      const dateFrom = new Date(datesBefore).getTime(); //first date
      const dateTo = new Date(datesAfter).getTime(); //second date

      if (datesBefore <= 0 && datesAfter <= 0) {
        return parameter;
      } else if (datesBefore && datesAfter) {
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

      if (country === countryState) {
        return parameter;
      } else if (country !== countryState) {
        return parameter.country === country;
      }
      return parameter;
    })
    .filter((parameter) => {
      //filter of the prices

      let roomCost = 0;
      if (price !== priceState) {
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
      if (rooms === roomsState) {
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
