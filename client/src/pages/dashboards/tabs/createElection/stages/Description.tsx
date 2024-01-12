import React, { useState } from "react";
import { Input } from "../../../../../components/atoms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../../../../lib/hooks";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { updateData } from "../../../../../redux/slices/createElection/electionInput.slice";

export default function Description() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const [electionInfo, setElectionData] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFirstInputFilled, setIsFirstInputFilled] = useState(false);

  const handleNextStage = () => {
    dispatch(updateData(electionInfo));
    navigation("/dashboard/create-election/candidate");
  };

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    setElectionData((prevData) => ({ ...prevData, startDate: value }));

    setIsFirstInputFilled(value !== "");
  };

  const handleEndDateChange = (value: string) => {
    if (value >= startDate) {
      setEndDate(value);
      setElectionData((prevData) => ({ ...prevData, endDate: value }));
    } else {
      showToastMessage();
    }
  };

  const handleInputChange = (feildName: string, value: string) => {
    setElectionData((prevData) => ({
      ...prevData,
      [feildName]: value,
    }));
  };

  const showToastMessage = () => {
    toast.error(`choose a date after ${startDate}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="w-[full]  mt-8 p-4 flex flex-col items-center">
      <ToastContainer />
      <h3 className="font-bold text-2xl w-[90%] flex justify-center ">
        Description
      </h3>
      <form action="" className="flex flex-col items-center w-[90%]">
        <Input
          label="position name?"
          desc="Class prefect"
          onChange={(value) => handleInputChange("position", value)}
        />
        <Input
          label="what is this election about?"
          desc="the new class leader"
          onChange={(value) => handleInputChange("description", value)}
        />
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
