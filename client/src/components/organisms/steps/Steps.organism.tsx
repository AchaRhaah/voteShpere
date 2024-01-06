import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoPeopleOutline, IoPersonOutline, IoPerson } from "react-icons/io5";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Steps({ location }: { location: string }) {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full">
        <ol className="grid grid-cols-1 divide-x overflow-hidden rounded-lg border  text-sm text-gray-500 sm:grid-cols-3">
          <li
            className={`${
              location == "description" ? "text-[#065AD8]" : ""
            } flex items-center justify-center gap-2 p-4`}
            onClick={() => {
              navigate("/dashboard/create-election/description");
            }}
          >
            {location == "description" ? (
              <BiSolidEditAlt className="text-2xl" />
            ) : (
              <CiEdit className="text-2xl" />
            )}

            <p className="leading-none">
              <strong className="block font-medium"> Description </strong>
              <small className="mt-1"> What is this election about? </small>
            </p>
          </li>

          <li
            className={`relative flex items-center justify-center gap-2 p-4 ${
              location == "candidates" ? "text-[#065AD8]" : ""
            }`}
            onClick={() => {
              navigate("/dashboard/create-election/candidate");
            }}
          >
            {location == "candidates" ? (
              <IoPeopleSharp className="text-2xl" />
            ) : (
              <IoPeopleOutline className="text-2xl" />
            )}

            <p className="leading-none">
              <strong className="block font-medium"> Candidates </strong>
              <small className="mt-1"> Who are those running </small>
            </p>
          </li>
          <li
            className={`${
              location == "voters" ? "text-[#065AD8]" : ""
            } relative flex items-center justify-center gap-2 p-4`}
            onClick={() => {
              navigate("/dashboard/create-election/voters");
            }}
          >
            {location == "voters" ? (
              <IoPerson className="text-2xl" />
            ) : (
              <IoPersonOutline className="text-2xl" />
            )}

            <p className="leading-none">
              <strong className="block font-medium"> Voters </strong>
              <small className="mt-1"> Who is voting. </small>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
