import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, image }) => {
  return (
    <motion.div className="w-60 mx-5">
      <div className="h-60">
        <img
          className=" inline"
          src={image}
          width="200"
          alt="ServicesLogo"
        ></img>
      </div>
      <h1 className="text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue">
        {title}
      </h1>
    </motion.div>
  );
};

export default ServicesCard;
