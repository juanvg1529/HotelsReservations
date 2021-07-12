const datesHandler = (dateFrom, dateTo) => {
  let dayFrom = new Date(dateFrom).getDate() + 1;
  let dayTo = new Date(dateTo).getDate() + 1;

  let MonthFrom = new Date(dateFrom).getMonth() + 1;
  let MonthTo = new Date(dateTo).getMonth() + 1;
  let yearFrom = new Date(dateFrom).getFullYear();
  let yearTo = new Date(dateTo).getFullYear();
  let arrayDates = [dayFrom, dayTo, MonthFrom, MonthTo, yearFrom, yearTo];
  return arrayDates;
};

export default datesHandler;
