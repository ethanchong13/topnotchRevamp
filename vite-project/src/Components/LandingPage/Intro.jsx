import React from "react";
import { motion } from "framer-motion";

const Intro = ({ title, details }) => {
  return (
    <motion.div className=" my-32">
      <div className="flex justify-center px-16 ">
        <div>
          <motion.div
          // initial={{ y: "-5vh", opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: "1" }}
          >
            <h1 className="text-[4.5rem] tracking-widest font-semibold bg-gradient-to-r from-topnotch-blue to-topnotch-yellow text-transparent bg-clip-text text-center">
              {/* TALENT BEYOND */}
              {title}
            </h1>
            {/* <h1 className="text-[4.5rem] tracking-widest font-semibold text-center text-topnotch-yellow">
              EXCELLENCE
            </h1> */}
          </motion.div>
          <motion.div
            className="w-full py-10 justify-center flex text-center"
            // initial={{ y: "+5vh", opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: "1" }}
          >
            <h5 className="text-center tracking-wider font-light text-[21px] text-topnotch-grey max-w-[880px]">
              {/* Whether it's
              <b className="font-semibold">executive search, contracting</b> or
              <b className="font-semibold">outsourced payroll</b>, we're a team
              of highly dedicated
              <b className="font-semibold underline-offset-8 underline decoration-topnotch-yellow decoration-4">
                HR professionals in Malaysia
              </b>
              ready at your service. */}
              {details}
            </h5>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
