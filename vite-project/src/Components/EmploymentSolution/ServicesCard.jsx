import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, img }) => {
  return (
    <motion.div className="flex-1">
      <div className="flex justify-center flex-col items-center">
        <img
          className="w-[300px] h-[200px] object-contain md:mt-0 mt-10"
          src={img}
          alt="ServicesLogo"
        ></img>
      </div>
      <h1 className="mt-10 text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue">
        {title}
      </h1>
    </motion.div>
  );
};

export default ServicesCard;
