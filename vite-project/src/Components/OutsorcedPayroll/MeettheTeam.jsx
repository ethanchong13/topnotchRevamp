import React from "react";
import { teams } from "../../constants";
import Title from "../LandingPage/Title";
import TeamGrid from "./TeamGrid";

const MeettheTeam = () => {
  return (
    <>
      <Title title="Meet the Team" />
      <div className="justify-center grid mx-auto sm:grid-cols-3 grid-cols-2 gap-4 px-14 my-32">
        {teams.map((team) => {
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
