import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="State Date"
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
      />
    </React.Fragment>
  );
};

export default Dates;
