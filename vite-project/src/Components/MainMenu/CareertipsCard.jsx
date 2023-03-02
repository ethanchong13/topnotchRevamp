import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { BsFillPlusCircleFill , BsArrowReturnRight } from 'react-icons/bs'

const CareertipsCard = () => {
  
    const [isOpen,setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={()=>setIsOpen(false)}>
      <motion.div whileHover={{scale:1.05 }}
      transition={{type:"spring"}}
    //    transition={{layout:{duration:1,type:"spring"}}} 
    // transition={{ type: "spring", stiffness: 100, damping: 10}}
    layout
      onClick={()=>setIsOpen(true)}
      className={`text-${isOpen? 'left w-auto':'center w-60 h-48'} bg-stone-200 py-8 px-6 mx-2 my-4 hover:bg-blue-900 hover:text-slate-200 rounded-2xl`}
    >
        <motion.div className={`grid justify-items-end text-stone-500 ${isOpen&& 'hidden'}`}><BsFillPlusCircleFill /></motion.div>
        <motion.div className={`flex items-end ${isOpen ? 'h-14':'h-28'} mr-16`}>
        <motion.h2 layout="position" className={`${isOpen&&'px-3 py-3'} text-2xl font-light text-left`}>Career Tips</motion.h2>
        </motion.div>
        {isOpen ? (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className=''>
            <p className='py-4 leading-6 px-3'>Spice IN</p>
            {/* <Button variant="contained" className=' bg-slate-200'>Learn more</Button> */}
            <motion.div className='flex'>
            <motion.button
            whileHover={{scale:1.05}}
            transition={{type:"spring"}}
            className='py-2 px-3 hover:underline'><a className='flex items-center' href="https://zom-in.com/spiceIn" target="_blank"><BsArrowReturnRight /> &nbsp;Learn more</a></motion.button>
            </motion.div>
          </motion.div>
        ):null}
        
    </motion.div>
    </OutsideClickHandler>
  )
}

export default CareertipsCard