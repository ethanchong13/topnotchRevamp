import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const recipientEmail = "haoyin_chong@hotmail.com";
  return (
    <motion.div className="w-full flex justify-center my-32">
      <motion.div className="text-center">
        <motion.div className=" text-8xl font-semibold my-10 text-topnotch-blue tracking-wide">
          Let's work <span className="text-topnotch-yellow">together</span>
        </motion.div>
        <motion.p
          initial={{ y: "+3vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "1.5" }}
          className="text-topnotch-grey text-lg"
        >
          Contact us for more information
        </motion.p>
        <motion.div className="my-10 text-5xl text-topnotch-blue font-light tracking-wide">
          <button
            onClick={() => {
              window.location.href = `mailto:${recipientEmail}?subject="Contact us"`;
            }}
            className="rounded-full border-4 px-24 py-5 border-topnotch-yellow"
          >
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
