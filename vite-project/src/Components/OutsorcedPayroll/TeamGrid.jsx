import React from "react";

const TeamGrid = ({ team, description }) => {
  return (
    <div className="text-center border px-14">
      <h1>{team}</h1>
      <div>{description}</div>
    </div>
  );
};

export default TeamGrid;
