import React from "react";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <motion.div
      initial={{ y: "-5vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "1" }}
      className="my-28"
    >
      <p className="text-[3.5rem] font-semibold text-topnotch-blue underline-offset-[15px] underline decoration-topnotch-yellow decoration-[5px]">
        {title}
      </p>
    </motion.div>
  );
};

export default Title;
