import React from "react";
import { motion } from "framer-motion";
import { email } from "../../constants";

const ContactUs = ({ bluetext, yellowtext, description, buttontext }) => {
  return (
    <motion.div className="w-full flex justify-center my-32">
      <motion.div className="text-center">
        <motion.div className=" text-8xl font-semibold my-10 text-topnotch-blue tracking-wide">
          {bluetext} <span className="text-topnotch-yellow">{yellowtext}</span>
        </motion.div>
        <motion.p
          initial={{ y: "+3vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "1.5" }}
          className="text-topnotch-grey text-lg px-[20rem]"
        >
          {description}
        </motion.p>
        <motion.div className="my-10 text-5xl text-topnotch-blue font-light tracking-wide">
          <button
            onClick={() => {
              window.location.href = `mailto:${email}?subject="Contact us"`;
            }}
            className="rounded-full border-4 px-24 py-5 border-topnotch-yellow"
          >
            {buttontext}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
