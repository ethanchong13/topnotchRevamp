import React from "react";
import { motion } from "framer-motion";

import TalentIdentificationImage from "../../assets/Images/EmploymentSolution/TalentIdentification.svg";
import ProfessionalContractingImage from "../../assets/Images/EmploymentSolution/ProfessionalContracting.svg";
import HRStrategiesImage from "../../assets/Images/EmploymentSolution/HRStrategies.svg";
import ServicesCard from "./ServicesCard";
import Title from "../LandingPage/Title";

const Services = () => {
  return (
    <motion.div className="mx-auto my-28 px-20 block text-center">
      {/* Title */}
      <motion.div
        className="flex justify-between"
        initial={{ y: "+10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "1" }}
      >
        {/* Services card (Images and title) */}
        <ServicesCard
          title="Talent Identification"
          image={TalentIdentificationImage}
        />
        <ServicesCard
          title="Professional Contracting Services"
          image={ProfessionalContractingImage}
        />
        <ServicesCard
          title="HR Strategies Consultation"
          image={HRStrategiesImage}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;
