import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Cal = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col items-start p-6 min-h-screen w-full max-w-3xl mx-auto">
      <p className="text-lg font-semibold text-center w-full text-[23px] mb-3">
        Choose a date to visit
      </p>

      <div className="flex flex-col md:flex-row justify-center w-full">
        {/* Start Date Picker */}
        <div className="w-full md:w-1/2 flex justify-center mt-5">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            inline
          />
        </div>

        {/* End Date Picker */}
        <div className="w-full md:w-1/2 flex justify-center mt-5">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            inline
          />
        </div>
      </div>
    </div>
  );
};

export default Cal;
