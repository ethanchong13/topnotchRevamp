import React from 'react'
import TopnotchLogo from '../../assets/Images/topnotch_onlylogo.png'
import{ motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className=' px-24 sticky top-0 left-0 right-0 z-10 backdrop-blur bg-white/60'>
      <motion.div
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:"spring",duration:'1'}}
        >
          <Link to="/">
          <img className='py-8 sticky top-0' src={TopnotchLogo} width="150" alt="TopNotch Logo"></img>     
          </Link>
        </motion.div>       
    </header>
  )
}

export default Header