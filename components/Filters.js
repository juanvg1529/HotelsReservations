function Filters() {
  return (
    <div className="filters-styles">
      <div className="Dates">
        <input type="date" />

        <input type="date" />
      </div>
      <div className="selects">
        <select name="categories" id="Countries">
          <option value="organizacion">--Choose a country---</option>
          <option value="negocio">Argentina</option>
          <option value="salud">Brazil</option>
          <option value="estudios">Chile</option>
        </select>
        <select name="categories" id="Cost-room">
          <option value="organizacion">--Choose a cost--</option>
          <option value="organizacion">low cost ($)</option>
          <option value="negocio">medium cost($$)</option>
          <option value="salud">high cost($$$)</option>
          <option value="estudios">Premium($$$$)</option>
        </select>
        <select name="categories" id="number-of-bedrooms">
          <option value="organizacion">--Choose a hotel--</option>
          <option value="organizacion">Little hotel</option>
          <option value="negocio">Medium hotel</option>
          <option value="salud">big hotel </option>
        </select>
        <button className="reset-button"> RESET</button>
      </div>
    </div>
  );
}

export default Filters;
