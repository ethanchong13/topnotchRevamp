import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BsFillPlusCircleFill, BsArrowReturnRight } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiHumanTarget, GiHumanPyramid } from "react-icons/gi";

const EmploymentCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring" }}
        //    transition={{layout:{duration:1,type:"spring"}}}
        // transition={{ type: "spring", stiffness: 100, damping: 10}}
        layout
        onClick={() => setIsOpen(true)}
        className={`text-${
          isOpen ? "left w-96" : "center w-60 h-64"
        } bg-stone-200 py-8 px-6 mx-2 my-4 hover:bg-lime-800 hover:text-slate-200 rounded-2xl`}
      >
        <motion.div
          className={`grid justify-items-end text-stone-500 ${
            isOpen && "hidden"
          }`}
        >
          <BsFillPlusCircleFill />
        </motion.div>
        <motion.div
          className={`flex items-end ${isOpen ? "h-14" : "h-44"}  mr-16`}
        >
          <motion.h2
            layout="position"
            className={`${isOpen && "px-3 py-3"} text-2xl font-light text-left`}
          >
            Employment Solutions
          </motion.h2>
        </motion.div>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <p className="py-3 leading-6 px-3 flex items-center">
              <GiHumanTarget />
              &nbsp;Talent identification
            </p>
            <p className="pb-3 leading-6 px-3 flex items-center">
              <MdMiscellaneousServices />
              &nbsp;Professional Contracting Services
            </p>
            <p className="pb-3 leading-6 px-3 flex items-center">
              <GiHumanPyramid />
              &nbsp;HR Strategies Consultation
            </p>
            <motion.div className="flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
                className="py-2 px-3"
              >
                <Link
                  to="EmploymentSolution"
                  className="flex items-center hover:underline hover:text-slate-200"
                >
                  <BsArrowReturnRight /> &nbsp;Learn more
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </motion.div>
    </OutsideClickHandler>
  );
};

export default EmploymentCard;
