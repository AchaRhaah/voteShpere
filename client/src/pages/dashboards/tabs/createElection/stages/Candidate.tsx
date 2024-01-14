import React, { useState } from "react";
import { BsPersonPlus } from "react-icons/bs";
import { CandidateInfo } from "../../../../../components/molecules";
import { CandidateDataType } from "../../../../../repository/types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../lib/hooks";
import { RootState } from "../../../../../redux/store/store";
import { updateCandidates } from "../../../../../redux/slices/createElection/electionInput.slice";

export default function Candidate() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: RootState) => state.electionInputSlice);
  console.log(state);
  const [candidates, setCandidates] = useState<CandidateDataType[]>([]);
  const navigation = useNavigate();
  const [addCandidate, setAddCandidate] = useState<number>(0);
  const handlePreviousStage = () => {
    navigation("/dashboard/create-election/candidate");
  };

  const handleNextStage = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateCandidates(candidates));
    navigation("/dashboard/create-election/voters");
  };

  const AddCandidates = (e: React.MouseEvent) => {
    setAddCandidate((prev) => prev + 1);
    setCandidates((prevCandidates) => [
      ...prevCandidates,
      { name: "", description: "" },
    ]);
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col items-center justify-center my-3">
      <h3 className="font-bold text-2xl w-[90%] flex justify-center">
        Candidates
      </h3>

      {candidates.length == 0 ? (
        <p className="my-4">No candidate</p>
      ) : (
        <form
          action=""
          className="flex flex-col w-[90%] mb-8 items-center justify-center"
        >
          {candidates.map((candidate, index) => (
            <CandidateInfo
              key={index}
              candidateNum={index + 1}
              candidates={candidates}
              setCandidates={setCandidates}
            />
          ))}

          <button
            className={` ${
              addCandidate > 0 ? "flex" : "hidden"
            } flex gap-2 border p-4 rounded-lg border-[#EC9A4A] w-[30%] mt-8 items-center justify-center`}
            onClick={AddCandidates}
          >
            <BsPersonPlus className="md:text-xl  text-lg " />
            <p className="text-sm md:text-lg">Add Candidate</p>
          </button>
          <div className=" flex w-full mt-8 items-center justify-center gap-6">
            <button
              className="bg-[#065AD8] w-1/3 text-white p-2 rounded-xl my-2"
              onClick={handlePreviousStage}
            >
              Back
            </button>
            <button
              className="bg-[#EC9A4A] text-white w-1/3 p-2 rounded-xl my-2"
              onClick={handleNextStage}
            >
              Next
            </button>
          </div>
        </form>
      )}
      <button
        className={` ${
          candidates.length > 0 ? "hidden" : "flex"
        } flex gap-2 border p-4 rounded-lg border-[#EC9A4A] w-[20%]`}
        onClick={AddCandidates}
      >
        <BsPersonPlus className="text-xl" />
        <p>Add Candidate</p>
      </button>
    </div>
  );
}
