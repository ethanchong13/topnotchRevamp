import React from 'react'
import {motion , LayoutGroup} from 'framer-motion'

const TopNotchCard = () => {
  

  return (
    
      <motion.div 
      transition={{layout:{duration:1,type:"spring" }}} 
      layout 
      className={`text-center w-60' bg-stone-200 py-6 px-8 mx-2 my-4 w-auto`}
      style={{borderRadius:'1rem'}}
    >
        <img className='inline pb-2' src="https://topnotchgroup.com.my/wp-content/uploads/2016/11/TopNotch_Web-Logo.png" width="90" alt="TopNotch Logo"></img>
        <motion.h2 layout="position" className='text-2xl font-medium'>TopNotch</motion.h2>
        <motion.h2 layout="position" className='text-2xl font-light'>HR Consulting</motion.h2>
        
        
            {/* <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className=' w-96'>
            <p className='pt-4 leading-6'>Exmple, Hello welcome to topnotch~ </p>
            <p className='pt-4 leading-6 inline'>Collapsible components put long sections of information under a block, which enables users to expand and access its features. The uniqueness of being a developer is implementing anything to be built in a particular way. In our case, we want animated collapsible components. Though libraries like react-collapse could help, you may want to build these things yourself.</p>
          </motion.div> */}
        
        
    </motion.div>
    
  )
}

export default TopNotchCard