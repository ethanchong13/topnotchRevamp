import React from "react";
import { motion, useScroll } from "framer-motion";

import Header from "../Components/LandingPage/Header";
import Intro from "../Components/LandingPage/Intro";
import ContactUs from "../Components/LandingPage/ContactUs";
import Services from "../Components/EmploymentSolution/Services";
import ServicesDetails from "../Components/EmploymentSolution/ServicesDetails";

const EmploymentSolutionLanding = () => {
  return (
    <div className="flex">
      <div className=" block relative">
        {/* Logo nav bar */}
        <Header />
        {/* <Intro /> */}

        {/* Employment Solution services */}
        <Services />

        {/* Employment solution details gold section */}
        <ServicesDetails />

        {/* Contact Us */}
        <ContactUs />
      </div>
    </div>
  );
};

export default EmploymentSolutionLanding;
