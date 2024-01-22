import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Input } from "../../../../../../components/atoms";
import { ToastContainer, toast } from "react-toastify";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../repository/hooks";
import { useNavigate } from "react-router-dom";
import {
  updateData,
  updateCreateor,
} from "../../../../../../redux/slices/createElection/electionInput.slice";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../../../../../../redux/store/store";

// const TAB_KEY = "createElectionDescription";

export default function Description() {
  const user = Cookies.get("user");
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const electionInfoState = useAppSelector(
    (state: RootState) => state.CreateElectionSlice.data
  );
  console.log(electionInfoState);
  // const storedElectionInfo = JSON.parse(localStorage.getItem(TAB_KEY) || "{}");
  const [electionInfo, setElectionData] = useState({
    position: electionInfoState.position || "",
    description: electionInfoState.description || "",
    startDate: electionInfoState.startDate || "",
    endDate: electionInfoState.endDate || "",
    // ...storedElectionInfo,
  });
  const [startDate, setStartDate] = useState("" || electionInfoState.startDate);
  const [endDate, setEndDate] = useState("" || electionInfoState.endDate);
  const [isFirstInputFilled, setIsFirstInputFilled] = useState(false);

  const handleNextStage = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateData(electionInfo));
    dispatch(updateCreateor(user));
    navigation("/dashboard/create-election/candidate");
  };

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    setElectionData((prevData: any) => ({ ...prevData, startDate: value }));
    setIsFirstInputFilled(value !== "");
  };

  const handleEndDateChange = (value: string) => {
    if (value >= startDate) {
      setEndDate(value);
      setElectionData((prevData: any) => ({ ...prevData, endDate: value }));
    } else {
      showToastMessage();
    }
  };

  const handleInputChange = (feildName: string, value: string) => {
    setElectionData((prevData: any) => ({
      ...prevData,
      [feildName]: value,
    }));
  };

  const showToastMessage = () => {
    toast.error("choose a date after the start date", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  // Save data to localStorage when the component unmounts
  // useEffect(() => {
  //   localStorage.setItem(TAB_KEY, JSON.stringify(electionInfo));
  // }, [electionInfo]);

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
          value={electionInfo.position}
          onChange={(value) => handleInputChange("position", value)}
        />
        <Input
          label="what is this election about?"
          desc="the new class leader"
          value={electionInfo.description}
          onChange={(value) => handleInputChange("description", value)}
        />
        <div className="flex gap-4 w-full">
          <Input
            label="Start date"
            type="date"
            value={electionInfo.startDate}
            onChange={handleStartDateChange}
            minDate={new Date().toISOString().split("T")[0]}
          />
          <Input
            label="End date"
            type="date"
            value={electionInfo.endDate}
            onChange={handleEndDateChange}
            minDate={startDate}
            disabled={!isFirstInputFilled}
          />
        </div>
        <button
          onClick={handleNextStage}
          type="submit"
          className="bg-[#065AD8] text-white w-1/2 p-2 rounded-xl my-2"
        >
          Next
        </button>
      </form>
    </div>
  );
}
