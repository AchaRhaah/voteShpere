import React, { useState } from "react";
import { Input } from "../../../../../components/atoms";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFirstInputFilled, setIsFirstInputFilled] = useState(false);
  const navigation = useNavigate();
  const handleNextStage = () => {
    navigation("/dashboard/create-election/candidate");
  };
  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    setIsFirstInputFilled(value !== "");
  };

  const handleEndDateChange = (value: string) => {
    if (value >= startDate) {
      setEndDate(value);
    } else {
      alert(`choose a date after ${startDate}`);
    }
  };

  return (
    <div className="w-[full]  mt-8 p-4 flex flex-col items-center">
      <h3 className="font-bold text-2xl w-[90%] flex justify-center ">
        Description
      </h3>
      <form action="" className="flex flex-col items-center w-[90%]">
        <Input label="what is this election about?" desc="Class prefect" />
        <div className="flex gap-4 w-full">
          <Input
            label="Start date"
            type="date"
            onChange={handleStartDateChange}
            minDate={new Date().toISOString().split("T")[0]}
          />
          <Input
            label="End date"
            type="date"
            onChange={handleEndDateChange}
            minDate={startDate}
            value={endDate}
            disabled={!isFirstInputFilled}
          />
        </div>
        <button
          onClick={handleNextStage}
          className="bg-[#065AD8] text-white w-1/2 p-2 rounded-xl my-2"
        >
          Next
        </button>
      </form>
    </div>
  );
}
