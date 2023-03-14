import React from "react";
import { motion, useScroll } from "framer-motion";

import Intro from "../Components/LandingPage/Intro";
import Header from "../Components/LandingPage/Header";
import ContactUs from "../Components/LandingPage/ContactUs";
import Services from "../Components/EmploymentSolution/Services";
import ServicesDetails from "../Components/EmploymentSolution/ServicesDetails";
import Title from "../Components/LandingPage/Title";

const EmploymentSolutionLanding = () => {
  return (
    <div className="block">
      {/* Logo nav bar */}
      <Header />

      {/* Title */}
      <Title title="Employment Solution" />

      {/* Employment Solution services */}
      <Services />

      {/* Employment solution details gold section */}
      <ServicesDetails />

      {/* Contact Us */}
      <ContactUs />
    </div>
  );
};

export default EmploymentSolutionLanding;
