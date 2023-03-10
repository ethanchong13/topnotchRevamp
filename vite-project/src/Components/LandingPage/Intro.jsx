import React from 'react'
import{motion} from 'framer-motion'

const Intro = () => {
  return (
    <motion.div className='block py-36'
        
      >
        <div className='flex justify-center mx-40 mb-10'>
            <div className='block'>
            <motion.div
            initial = {{y:'-5vh' , opacity:0}}
            animate = {{y:0, opacity:1}}
            // initial={{opacity:0, scale:0.3}}
            // animate={{opacity:1, scale:1}}
            transition={{duration:'1'}}>
            <h1 className='text-[4.5rem] tracking-widest font-semibold text-topnotch-blue text-center'>TALENT BEYOND</h1>                
            <h1 className='text-[4.5rem] tracking-widest font-semibold text-center text-topnotch-yellow'>EXCELLENCE</h1>
            </motion.div>
            <motion.div className='w-[50rem] py-10'
            initial = {{y:'+5vh' , opacity:0}}
            animate = {{y:0, opacity:1}}
            // initial={{opacity:0, scale:0.3}}
            // animate={{opacity:1, scale:1}}
            transition={{duration:'1'}}>
            <h5 className='text-center tracking-wider font-light text-[1.2rem] text-topnotch-grey'>Whether it's <b className='font-semibold'>executive search, contracting</b> or <b className='font-semibold'>outsourced payroll</b>, we're a team of highly dedicated <b className='font-semibold underline-offset-8 underline decoration-topnotch-yellow decoration-4'>HR professionals in Malaysia</b> ready at your service.</h5>
            </motion.div>
            </div>
        </div>
    </motion.div>   
    )
}

export default Intro