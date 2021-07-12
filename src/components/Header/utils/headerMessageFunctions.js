import { messageInitial } from "../../../../public/data/data";

function getAnyDate(Month) {
  switch (Month) {
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

function anyCost(costH) {
  switch (costH) {
    case "lowCost":
      return "Low Cost ($)";
    case "mediumCost":
      return "Medium Cost ($$)";
    case "highCost":
      return "High Cost ($$$)";
    case "Premium":
      return "Premium ($$$$)";

    default:
      return (messageInitial.priceInitial = "All Cost");
  }
}
function anyRoom(roomsH) {
  switch (roomsH) {
    case "littleHotel":
      return "Little Hotel";
    case "mediumHotel":
      return "Medium Hotel";
    case "bigHotel":
      return "Big Hotel";
    default:
      return (messageInitial.roomsInitial = "All Sizes");
  }
}
export { getAnyDate, anyRoom, anyCost };
