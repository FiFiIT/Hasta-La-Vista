import React from "react";
import TimePicker from "react-time-picker";

const TimeInput = ({ name, label, startTime, handleTimeChange, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-errors";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <TimePicker name={name} value={startTime} onChange={handleTimeChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TimeInput;
