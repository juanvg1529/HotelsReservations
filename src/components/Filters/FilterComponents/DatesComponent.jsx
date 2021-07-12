import React from "react";

export const DatesComponent = (props) => {
  return (
    <div className="Dates">
      <input
        type="date"
        value={props.valueDayBefore}
        onChange={props.onChangeDayBefore}
      />

      <input
        type="date"
        value={props.valueDayAfter}
        onChange={props.onChangeDayAfter}
      />
    </div>
  );
};
