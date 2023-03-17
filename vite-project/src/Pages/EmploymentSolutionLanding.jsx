import React from "react";

import Intro from "../Components/LandingPage/Intro";
import Header from "../Components/LandingPage/Header";
import ContactUs from "../Components/LandingPage/ContactUs";
import Services from "../Components/EmploymentSolution/Services";
import ServicesDetails from "../Components/EmploymentSolution/ServicesDetails";
import Title from "../Components/LandingPage/Title";

const EmploymentSolutionLanding = () => {
  return (
    <div>
      {/* Logo nav bar */}
      <Header />

      {/* Title */}
      <Title title="Employment Solution" />

      {/* Employment Solution services */}
      <Services />

      {/* Employment solution details gold section */}
      <ServicesDetails />

      {/* Contact Us */}
      <ContactUs
        bluetext="Let's work "
        yellowtext="together"
        description="Contact us for more information"
        buttontext="Contact Us"
      />
    </div>
  );
};

export default EmploymentSolutionLanding;
