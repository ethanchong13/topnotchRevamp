import React from 'react'
import {motion , useScroll} from 'framer-motion'

import Header from '../Components/LandingPage/Header'
import Intro from '../Components/LandingPage/Intro'
import TalentIdentificationImage from '../assets/Images/EmploymentSolution/TalentIdentification.svg'
import ProfessionalContractingImage from '../assets/Images/EmploymentSolution/ProfessionalContracting.svg'
import HRStrategiesImage from '../assets/Images/EmploymentSolution/HRStrategies.svg'

const EmploymentSolutionLanding = () => {
  return (
    <div className='flex min-w-max overflow-hidden'>
        <div className='min-w-full block'>
          <Header />
          <Intro />
         
          <motion.div 
          
          className=' mx-36 block text-center'>
            <div className='my-16'>
            <p className='text-[3.5rem] font-semibold text-topnotch-blue underline-offset-[15px] underline decoration-topnotch-yellow decoration-[5px]'>
              Services
            </p>
            </div>
            <motion.div className='flex justify-between'
            // initial={{opacity:0}}
            // whileInView={{opacity:1}}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1, type:"spring"}}
            >
              <div className='w-60'>
              <div className='h-60'>
              <img className=' inline' src={TalentIdentificationImage} width="200" alt="TopNotch Logo"></img>
              </div>
              <h1 className='text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue'>Talent Identification</h1>
              </div>
              <div className='w-60'>
              <div className='h-60'>
              <img className='inline' src={ProfessionalContractingImage} width="200" alt="TopNotch Logo"></img>
              </div>
              <h1 className='block text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue leading-normal'>Professional contracting services</h1>
              </div>
              <div className='w-60'>
              <div className='h-60'>
              <img className='inline' src={HRStrategiesImage} width="200" alt="TopNotch Logo"></img>
              </div>
              <h1 className='block text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue leading-normal'>HR Strategies Consultation</h1>
              </div>
            </motion.div>
          </motion.div>

        </div>
    </div>
  )
}

export default EmploymentSolutionLanding