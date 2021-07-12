const CostComponent = (props) => {
  return (
    <>
      <select
        name="categories"
        id="Cost-room"
        value={props.valueCost}
        onChange={props.onChange}
      >
        <option value={props.initialState}>{props.initialState}</option>
        <option value="lowCost">low cost ($)</option>
        <option value="mediumCost">medium cost($$)</option>
        <option value="highCost">high cost($$$)</option>
        <option value="Premium">Premium($$$$)</option>
      </select>
    </>
  );
};

export default CostComponent;
