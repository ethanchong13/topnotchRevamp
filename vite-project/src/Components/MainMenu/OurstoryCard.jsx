import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { BsFillPlusCircleFill , BsArrowReturnRight} from 'react-icons/bs'
import OurStoryImage from '../../assets/Images/team_image_01.jpg'

const OurstoryCard = () => {
  
    const [isOpen,setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={()=>setIsOpen(false)}>
      <motion.div whileHover={{scale:1.05}}
      transition={{type:"spring"}}
    //    transition={{layout:{duration:1,type:"spring"}}} 
    // transition={{ type: "spring", stiffness: 100, damping: 10}}
    layout
      onClick={()=>setIsOpen(true)}
      className={`text-${isOpen? 'left w-auto':'center w-60 h-80'} py-8 px-6 mx-2 my-4 text-slate-200 bg-[url('/src/assets/Images/team_image_01.jpg')] bg-center bg-cover grayscale hover:grayscale-0`}
      style={{borderRadius:'1rem'}}
    >

      <motion.div className='grid justify-items-end text-stone-500'>
            <BsFillPlusCircleFill />
        </motion.div>
        {/* <div className='w-32 h-52 bg-red-500'>
        </div> */}
        <motion.div className={`flex items-end ${isOpen ? 'h-14': 'h-52'} mr-16`}>
        <motion.h2 layout="position" className={`${isOpen ? 'px-3 py-3': 'ml-3'} text-2xl font-light text-left`}>Our Story</motion.h2>
        </motion.div>
        {isOpen ? (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className=''>
            <p className='py-4 px-3 leading-6'>Whether it's executive search, contracting, or outsourced payroll, we're a team of highly dedicated HR professionals in Malaysia ready at your service.</p>
            <motion.div className='flex'>
            <motion.button
            whileHover={{scale:1.05}}
            transition={{type:"spring"}}
            className='py-2 px-3 hover:underline'><a className='flex items-center'><BsArrowReturnRight /> &nbsp;Learn more</a></motion.button>
            </motion.div>
        </motion.div>
        ):null}
        
    </motion.div>
    </OutsideClickHandler>
  )
}

export default OurstoryCard