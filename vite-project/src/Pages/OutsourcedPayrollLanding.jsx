import React from "react";
import ContactUs from "../Components/LandingPage/ContactUs";
import Header from "../Components/LandingPage/Header";
import Intro from "../Components/LandingPage/Intro";
import Title from "../Components/LandingPage/Title";

const OutsourcedPayrollLanding = () => {
  return (
    <div className="block">
      {/* Logo nav bar */}
      <Header />

      <Intro
        title="Outsourcing & Payrolling"
        details="We provide companies with better flexibility and agility to manage your contracting workforce. Besides assisting companies with contract staffing, we also provide clients with highly-digitized end-to-end HR administration support that includes payrolling, onboarding, annual leave, contracts, claims, and more. "
      />
      <Title title="Meet the Team" />

      {/* Contact Us */}
      <ContactUs />
    </div>
  );
};

export default OutsourcedPayrollLanding;
