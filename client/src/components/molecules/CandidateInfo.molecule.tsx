import { useState } from "react";
import { Input } from "../atoms";
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
    const [isHovered, setIsHovered] = useState(false);
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
      <div
        className="w-full border-b border-[#065AD8] py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
        <button
          className="bg-[#FF4D4D] px-2 py-1 rounded-sm text-white self-center
      "
        >
          remove
        </button>
      </div>
    );
}
