import React from "react";
import { motion } from "framer-motion";

const DetailsCard = ({ title, details }) => {
  return (
    <div className="flex py-10">
      <motion.div className="flex justify-end text-right w-2/5 px-10">
        <motion.h1
          initial={{ x: "-3vh", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: "1" }}
          className="tracking-wider font-normal uppercase text-[1.5rem] text-topnotch-blue leading-normal"
        >
          {title}
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ x: "+3vh", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: "1" }}
        className="w-3/5 px-10 text-slate-200 tracking-wider mr-36 leading-7 text-sm"
      >
        <p>{details}</p>
      </motion.div>
    </div>
  );
};

export default DetailsCard;
