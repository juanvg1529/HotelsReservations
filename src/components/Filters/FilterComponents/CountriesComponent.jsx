const CountriesComponent = (props) => {
  return (
    <>
      <select
        name="categories"
        id="Countries"
        value={props.valueCountry}
        onChange={props.onChangeCoountryComponent}
      >
        <option value={props.initialState}>{props.initialState}</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </>
  );
};
export default CountriesComponent;
