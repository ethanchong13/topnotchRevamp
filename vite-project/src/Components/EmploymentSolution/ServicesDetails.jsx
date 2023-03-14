import React from "react";
import { motion } from "framer-motion";
import DetailsCard from "./DetailsCard";

import ServicesData from "../../Datas/ServicesData";

const ServicesDetails = () => {
  return (
    <motion.div className="my-20 justify-center">
      <motion.div className=" w-full py-24 bg-topnotch-yellow">
        {ServicesData.map((data) => (
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
