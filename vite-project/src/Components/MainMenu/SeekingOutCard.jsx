import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BsArrowRightCircle, BsArrowReturnRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const SeekingOutCard = () => {
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
          isOpen ? "left w-80" : "center w-60 h-80"
        } bg-stone-200 py-8 px-6 mx-2 my-4 hover:bg-blue-900 hover:text-slate-200 rounded-2xl`}
      >
        <motion.div
          className={`flex items-end ${isOpen ? "h-12" : "h-48"} h- mr-16`}
        >
          <motion.h2
            layout="position"
            className={`${isOpen && "px-3 py-3"} text-2xl font-light text-left`}
          >
            SEEKING OUT?
          </motion.h2>
        </motion.div>

        <motion.div className={`pt-4 ${isOpen && "hidden"}`}>
          <IconContext.Provider value={{ size: "3em" }}>
            <BsArrowRightCircle />
          </IconContext.Provider>
        </motion.div>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" w-96"
          >
            <p className="pt-4 leading-6 px-3 my-4">
              Find your next job with us.{" "}
            </p>
            <motion.div className="flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
                className="py-2 px-3"
              >
                <Link
                  to="SeekingOut"
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

export default SeekingOutCard;
