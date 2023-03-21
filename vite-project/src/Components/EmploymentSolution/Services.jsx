import React from "react";
import { motion } from "framer-motion";

import ServicesCard from "./ServicesCard";
import { services } from "../../constants";

const Services = () => {
  return (
    <section className="mx-auto my-28 px-20 text-center">
      {/* Title */}
      <motion.div
        className="flex justify-between md:flex-row flex-col"
        initial={{ y: "+10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "1" }}
      >
        {/* Services card (Images and title) */}
        {services.map((service) => {
          return (
            <ServicesCard
              key={service.id}
              title={service.title}
              img={service.img}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
