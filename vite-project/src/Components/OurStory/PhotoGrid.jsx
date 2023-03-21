import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { teamImage } from "../../constants";

const PhotoGrid = () => {
  return (
    <section className="px-16 flex flex-col justify-center items-center">
      <div className="my-20 flex justify-center items-center">
        <h2 className="text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue max-w-[1000px]">
          Started humbly as a recruitment agency, TopNotch is an HR solutions
          provider that specializes in talent identification, contracting,
          payroll park over, and more.
        </h2>
      </div>

      <div>
        <ImageList variant="masonry" gap={8}>
          {teamImage.map((team) => {
            return (
              <ImageListItem key={team.id}>
                <img src={team.img} alt={team.id} />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    </section>
  );
};

export default PhotoGrid;
