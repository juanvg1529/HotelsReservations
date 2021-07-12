const RoomsComponent = (props) => {
  return (
    <>
      <select
        name="categories"
        id="number-of-bedrooms"
        value={props.valueRooms}
        onChange={props.onChange}
      >
        <option value={props.initialState}>{props.initialState}</option>
        <option value="littleHotel">Little hotel</option>
        <option value="mediumHotel">Medium hotel</option>
        <option value="bigHotel">big hotel </option>
      </select>
    </>
  );
};
export default RoomsComponent;
