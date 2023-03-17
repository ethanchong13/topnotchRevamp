import React from "react";
import ContactUs from "../Components/LandingPage/ContactUs";
import Header from "../Components/LandingPage/Header";
import IntroduceZomin from "../Components/SeekingOut/IntroduceZomin";

const SeekingOut = () => {
  return (
    <div>
      <Header />

      {/* Introduce Zomin */}
      <IntroduceZomin />

      {/* Form to deposit CV */}
      <ContactUs
        bluetext="Drop us your "
        yellowtext="resume"
        description="Can’t find any suitable roles on ZOM-IN for the time being? Drop us your updated CV, our professional consultants will reach out to you in no time. "
        buttontext="Email Us"
      />
    </div>
  );
};

export default SeekingOut;
