import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const JoinusCard = () => {
  
    const [isOpen,setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={()=>setIsOpen(false)}>
      <motion.div whileHover={{scale:1.05 }}
      transition={{type:"spring"}}
    //    transition={{layout:{duration:1,type:"spring"}}} 
    // transition={{ type: "spring", stiffness: 100, damping: 10}}
    layout
      onClick={()=>setIsOpen(true)}
      className={`text-${isOpen? 'left w-auto':'center w-60 h-64'} bg-stone-200 py-8 px-6 mx-2 my-4 hover:bg-lime-800 hover:text-slate-200`}
      style={{borderRadius:'1rem'}}
    >
        <motion.div className={`grid justify-items-end text-stone-500 ${isOpen&& 'hidden'}`}><BsFillPlusCircleFill /></motion.div>
        <motion.div className={`flex items-end ${isOpen ? 'h-14':'h-44'} mr-16`}>
        <motion.h2 layout="position" className={`${isOpen&&'px-3'} text-2xl font-light text-left`}>Join Us</motion.h2>
        </motion.div>
        {isOpen ? (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className=' w-96'>
            <p className='py-4 leading-6 px-3'>Want to be a part of this fast-growing HR firm? Drop us your updated CV at</p>
            <p className='pb-4 leading-6 px-3'> talent.acq@topnotchgroup.com.my </p>
          </motion.div>
        ):null}
        
    </motion.div>
    </OutsideClickHandler>
  )
}

export default JoinusCard