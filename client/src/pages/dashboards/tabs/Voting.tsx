import React from "react";
import { VoteCard } from "../../../components/organisms";

export default function Voting() {
  return (
    <div className="w-full h-full pt-10 px-8">
      <h1 className="font-bold text-2xl mb-4">Votings</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <VoteCard />
        <VoteCard />
        <VoteCard />
        <VoteCard />
      </div>
    </div>
  );
}
