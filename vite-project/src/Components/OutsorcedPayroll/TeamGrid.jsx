import React from "react";

const TeamGrid = ({ team, description }) => {
  return (
    <div className="text-center px-14 py-10">
      <h1 className="text-topnotch-grey my-3 text-[1.5rem]">{team}</h1>
      <p className="text-topnotch-grey text-sm">{description}</p>
    </div>
  );
};

export default TeamGrid;
