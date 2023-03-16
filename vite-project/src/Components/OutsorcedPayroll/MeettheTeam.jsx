import React from "react";
import Teams from "../../Datas/Teams";
import Title from "../LandingPage/Title";
import TeamGrid from "./TeamGrid";

const MeettheTeam = () => {
  return (
    <>
      <Title title="Meet the Team" />
      <div className="justify-center grid mx-auto grid-cols-3 gap-4 px-14 my-32">
        {Teams.map((team) => {
          return (
            <TeamGrid
              key={team.id}
              team={team.team}
              description={team.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default MeettheTeam;
