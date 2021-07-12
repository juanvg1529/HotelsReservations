import datesHandler from "../../Helper/datesHandleler";
import { messageInitial } from "../../../public/data/data";
import { getAnyDate, anyCost, anyRoom } from "./utils/headerMessageFunctions";
export const headerMessage = (dateFrom, dateTo, costH, roomsH, countryH) => {
  let messageReturned = `${messageInitial.dateFromInitial} ${messageInitial.dateToInitial} ${messageInitial.countryInitial}, ${messageInitial.priceInitial}, ${messageInitial.roomsInitial}. `;

  let arrayDatesHandler = datesHandler(dateFrom, dateTo);

  if (dateFrom.length > 2) {
    messageInitial.dateFromInitial = `${getAnyDate(arrayDatesHandler[2])} ${
      arrayDatesHandler[0]
    } of ${arrayDatesHandler[4]}`;
    messageInitial.dateToInitial = ",";

    if (dateTo.length > 2) {
      messageInitial.dateToInitial = ` ${getAnyDate(arrayDatesHandler[3])} ${
        arrayDatesHandler[1]
      } of ${arrayDatesHandler[5]}`;
      messageReturned = `${messageInitial.dateFromInitial} To ${messageInitial.dateToInitial}, ${messageInitial.countryInitial}, ${messageInitial.priceInitial}, ${messageInitial.roomsInitial}.`;
    }
  } else {
    messageInitial.dateFromInitial = "";
    messageInitial.dateToInitial = "Every date,";
  }
  //for countries only
  if (messageInitial.countryInitial !== "All a Countries") {
    messageInitial.countryInitial = countryH;
  } else {
    messageInitial.countryInitial = "all Countries";
  }

  //For prices only
  if (costH !== "all prices") {
    messageInitial.priceInitial = anyCost(costH);
  }
  //For Rooms Only
  if (messageInitial.roomsInitial !== "all rooms") {
    messageInitial.roomsInitial = anyRoom(roomsH);
  }
  return messageReturned;
};
