import React from "react";
import { motion } from "framer-motion";
import DetailsCard from "./DetailsCard";

import { servicesData } from "../../constants";

const ServicesDetails = () => {
  return (
    <motion.div className="my-20 justify-center">
      <motion.div className=" w-full py-24 px-14 bg-topnotch-yellow">
        {servicesData.map((data) => (
          <DetailsCard
            title={data.title}
            details={data.details}
            key={data.id}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesDetails;
