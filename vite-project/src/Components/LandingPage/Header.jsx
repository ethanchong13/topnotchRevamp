import React from 'react'
import TopnotchLogo from '../../assets/Images/topnotch_onlylogo.png'
import{ motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='mx-24 border-b flex'>
      <motion.div
        // initial={{x:'-100vw'}}
        // animate={{x:0}}
        // transition={{type:"spring",duration:'1', bounce:'0.3'}}
        >
          <Link to="/">
          <img className='py-8' src={TopnotchLogo} width="150" alt="TopNotch Logo"></img>     
          </Link>
        </motion.div>       
    </div>
  )
}

export default Header