import React, { useState, useRef } from "react";
import { BsPersonPlus } from "react-icons/bs";
import { Input } from "../../../../../components/atoms";
import { FaPeopleGroup, FaRegCopy } from "react-icons/fa6";
import { IoMdSend, IoMdShare } from "react-icons/io";

export default function Voters() {
  const [voterEmails, setVoterEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState<string>("");
  const [voteType, setVoteType] = useState<string>();
  const handleAddVoter = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newEmail.trim() !== "") {
      setVoterEmails((prevEmails) => [...prevEmails, newEmail]);
      setNewEmail("");
    }
  };
  const handleRemoveVOter = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setVoterEmails((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails.splice(index, 1);
      return updatedEmails;
    });
  };

  const handleCopyToClipBoard = () => {
    const input = document.querySelector('input[type="text"]');
    if (input) {
      input.select();
      document.execCommand("copy");
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center my-3">
      <h3 className="font-bold text-2xl w-[90%] flex justify-center">Voters</h3>
      {voteType == null ? (
        <div className="w-[90%] flex justify-center gap-6 mt-8">
          <button
            className="flex gap-2 border p-4 rounded-lg border-[#EC9A4A] w-[30%]"
            onClick={() => setVoteType("specific")}
          >
            <BsPersonPlus className="text-xl" />
            <p>Add specific voters</p>
          </button>
          <button
            className="flex gap-2 border p-4 rounded-lg border-[#EC9A4A] w-[30%]"
            onClick={() => setVoteType("general")}
          >
            <FaPeopleGroup className="text-xl" />
            <p>Anyone with a link</p>
          </button>
        </div>
      ) : voteType == "specific" ? (
        <div className="w-full flex justify-center">
          <form
            action=""
            className="flex flex-col w-[90%] mb-8 items-center justify-center"
          >
            {voterEmails.length > 0 && (
              <div className="border w-[50%] rounded-lg p-3 mt-6">
                {voterEmails.map((email, index) => (
                  <div
                    className={`w-full flex justify-between py-2 ${
                      index !== voterEmails.length - 1 ? "border-b" : ""
                    } `}
                    key={index}
                  >
                    <p>{email}</p>
                    <button
                      className="bg-[#F2F8FD] text-[#065ADB] p-1 rounded-md"
                      onClick={(e) => handleRemoveVOter(e, index)}
                    >
                      remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <Input
              label="Email"
              value={newEmail}
              onChange={(value) => setNewEmail(value)}
            />
            <button
              className="flex gap-2 border p-4 rounded-lg border-[#EC9A4A] w-[30%] justify-center"
              onClick={handleAddVoter}
            >
              <BsPersonPlus className="text-xl" />
              <p>Add Email</p>
            </button>
            <button
              className="flex gap-2 border p-4 rounded-lg bg-[#065ADB] text-white hover:bg-white hover:text-[#065adb] hover:border-[#065ADB] w-[30%] justify-center transition-all duration-100 ease-in-out mt-4"
              onClick={handleAddVoter}
            >
              <IoMdSend className="text-xl" />
              <p>Send Invite</p>
            </button>
            <p
              className="pt-4 text-[#065ADB] underline"
              onClick={() => {
                setVoteType("general");
              }}
            >
              Send link to all registered members
            </p>
          </form>
        </div>
      ) : (
        <div className="relative w-full my-3 text-sm flex flex-col items-center">
          <div className="w-[90%] flex flex-col">
            <label className="font-medium mb-1">Link</label>
            <div className="border rounded-lg p-2 flex justify-between">
              <input
                type={"text"}
                className=" outline-none"
                value={"http://localhost:5173/dashboard/create-election?"}
              />

              <FaRegCopy className="text-lg" onClick={handleCopyToClipBoard} />
            </div>
          </div>
          <button
            className="flex gap-2 border p-4 rounded-lg bg-[#065ADB] text-white hover:bg-white hover:text-[#065adb] hover:border-[#065ADB] w-[30%] justify-center transition-all duration-100 ease-in-out mt-4"
            onClick={handleAddVoter}
          >
            <IoMdShare className="text-xl" />
            <p>Share</p>
          </button>
          <p
            className="pt-4 text-[#065ADB] underline"
            onClick={() => {
              setVoteType("specific");
            }}
          >
            Add specific members
          </p>
        </div>
      )}
    </div>
  );
}