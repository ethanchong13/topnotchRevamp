import React from 'react'
import {motion} from 'framer-motion'
import TopnotchLogo from '../../assets/Images/topnotch_onlylogo.png'

const TopNotchCard = () => {

  return (
    
      <motion.div 
      transition={{type:"layout" }}
      layout
      className='text-center w-60 h-40 bg-stone-200 pb-1 px-8 mx-2 my-4 rounded-2xl'
    >
        <img className='inline mt-6 mb-4' src={TopnotchLogo} width="150" alt="TopNotch Logo"></img>
        <motion.h2 layout="position" className='text-2xl font-medium'>TopNotch</motion.h2>
        <motion.h2 layout="position" className='text-2xl font-light'>HR Consulting</motion.h2>
        
    </motion.div>
    
  )
}

export default TopNotchCard