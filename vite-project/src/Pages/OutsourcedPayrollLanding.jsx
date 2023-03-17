import React from "react";
import ContactUs from "../Components/LandingPage/ContactUs";
import Header from "../Components/LandingPage/Header";
import Intro from "../Components/LandingPage/Intro";
import Title from "../Components/LandingPage/Title";
import MeettheTeam from "../Components/OutsorcedPayroll/MeettheTeam";

const OutsourcedPayrollLanding = () => {
  return (
    <div className="block">
      {/* Logo nav bar */}
      <Header />

      <Intro
        title="Outsourcing & Payrolling"
        details="We provide companies with better flexibility and agility to manage your contracting workforce. Besides assisting companies with contract staffing, we also provide clients with highly-digitized end-to-end HR administration support that includes payrolling, onboarding, annual leave, contracts, claims, and more. "
      />
      <MeettheTeam />
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

export default OutsourcedPayrollLanding;
