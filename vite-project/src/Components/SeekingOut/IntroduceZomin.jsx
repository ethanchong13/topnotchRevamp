import React from "react";
import Title from "../LandingPage/Title";

import ZominGadget from "../../assets/Images/zomin_gadget.png";

const IntroduceZomin = () => {
  return (
    <div className="w-full sm:flex p-10">
      <div className="sm:w-1/2 text-start items-center pl-20 py-10">
        <h1 className="text-[3rem] my-8 text-topnotch-blue font-semibold">
          Introduce ZOM-IN
        </h1>
        <p className="text-topnotch-grey">
          ZOM-IN is an online job-search and career-enhancement platform
          established in 2018 to address the problem of fresh graduates being
          subjectively rejected by corporates- being perceived as overly
          dependent and inadequately prepared for work. As a platform that is
          devoted to connecting both companies and employees, ZOM-IN provides a
          series of employment-oriented programs, tools, and content- all for
          the purpose of inspiring and empowering fresh graduates and
          open-minded employers.
        </p>
        <div>
          <button
            className=" bg-topnotch-yellow text-white py-3 px-6 my-10 mr-3"
            onClick={() => {
              window.open("https://zom-in.com/", "_blank");
            }}
          >
            Get Started
          </button>
          <button
            className=" text-topnotch-blue py-3 px-6 my-10"
            onClick={() => {
              window.open("https://zom-in.com/SignUp", "_blank");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 flex items-center justify-center">
        <img src={ZominGadget} alt="zomin_in_gadget" className=" w-[30rem]" />
      </div>
    </div>
  );
};

export default IntroduceZomin;
