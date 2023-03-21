import React from "react";

const TeamGrid = ({ team, description }) => {
  return (
    <div className="text-center px-14 py-10">
      <h1 className="text-topnotch-grey my-3 text-[30px] font-semibold">
        {team}
      </h1>
      <p className="text-topnotch-grey text-[18upx]">{description}</p>
    </div>
  );
};

export default TeamGrid;
