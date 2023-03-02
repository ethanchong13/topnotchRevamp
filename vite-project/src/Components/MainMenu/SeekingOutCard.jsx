import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { BsArrowRightCircle } from 'react-icons/bs'
import {IconContext} from 'react-icons'

const SeekingOutCard = () => {
  
    const [isOpen,setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={()=>setIsOpen(false)}>
      <motion.div whileHover={{scale:1.05}}
      transition={{type:"spring"}}
    //    transition={{layout:{duration:1,type:"spring"}}} 
    // transition={{ type: "spring", stiffness: 100, damping: 10}}
    layout
      onClick={()=>setIsOpen(true)}
      className={`text-${isOpen? 'left w-80':'center w-60 h-80'} bg-stone-200 py-8 px-6 mx-2 my-4 hover:bg-blue-900 hover:text-slate-200`}
      style={{borderRadius:'1rem'}}
    >
        <motion.div className={`flex items-end ${isOpen ? 'h-12':'h-48'} h- mr-16`}>
        <motion.h2 layout="position" className={`${isOpen&&'px-3 py-3'} text-2xl font-light text-left`}>SEEKING OUT?</motion.h2>
        </motion.div>

        <motion.div className={`pt-4 ${isOpen&& 'hidden'}`}>
            <IconContext.Provider value={{size:"3em"}}>
            <BsArrowRightCircle />
            </IconContext.Provider>            
        </motion.div>
        {isOpen ? (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className=' w-96'>
            <p className='pt-4 leading-6 px-3'>Find your next job with us. </p>
            {/* <p className='pt-4 leading-6 inline'>Collapsible components put long sections of information under a block, which enables users to expand and access its features. The uniqueness of being a developer is implementing anything to be built in a particular way. In our case, we want animated collapsible components. Though libraries like react-collapse could help, you may want to build these things yourself.</p> */}
          </motion.div>
        ):null}
        
    </motion.div>
    </OutsideClickHandler>
  )
}

export default SeekingOutCard