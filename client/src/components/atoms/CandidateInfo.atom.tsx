import { useState } from "react";
import { Input } from ".";
import { CandidateDataType } from "../../repository/types/types";

interface CandidateInfoProps {
  candidateNum: number;
  candidates: CandidateDataType[];
  setCandidates: (candidates: CandidateDataType[]) => void;
}

export default function CandidateInfo({
  candidateNum,
  candidates,
  setCandidates,
}: CandidateInfoProps) {
  const [candidate, setCandidate] = useState<CandidateDataType>({
    name: "",
    description: "",
  });

  const handleNameChange = (value: string) => {
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      name: value,
    }));
    const updatedCandidates = [...candidates];
    updatedCandidates[candidateNum - 1] = {
      ...updatedCandidates[candidateNum - 1],
      name: value,
    };
    setCandidates(updatedCandidates);
  };

  const handleDescriptionChange = (value: string) => {
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      description: value,
    }));
    const updatedCandidates = [...candidates];
    updatedCandidates[candidateNum - 1] = {
      ...updatedCandidates[candidateNum - 1],
      description: value,
    };
    setCandidates(updatedCandidates);
  };

  return (
    <div className="w-full border-b border-[#065AD8] py-2">
      <Input
        label={`Candidate ${candidateNum}`}
        desc="John Doe"
        value={candidates[candidateNum - 1]?.name || ""}
        onChange={handleNameChange}
      />
      <Input
        onChange={handleDescriptionChange}
        label="Description"
        desc="2 years of leadership experience"
        value={candidates[candidateNum - 1]?.description || ""}
      />
    </div>
  );
}
