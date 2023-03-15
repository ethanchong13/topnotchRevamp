import React from 'react'
import {motion , useScroll} from 'framer-motion'

import Header from '../Components/LandingPage/Header'
import Intro from '../Components/LandingPage/Intro'
import TalentIdentificationImage from '../assets/Images/EmploymentSolution/TalentIdentification.svg'
import ProfessionalContractingImage from '../assets/Images/EmploymentSolution/ProfessionalContracting.svg'
import HRStrategiesImage from '../assets/Images/EmploymentSolution/HRStrategies.svg'

const EmploymentSolutionLanding = () => {
  return (
    <div className='flex'>
        <div className=' block relative'>
          
          <Header />
          
          {/* <Intro /> */}
          
          {/* Employment Solution services */}
          <motion.div 
          className=' mx-36 block text-center'>
            <motion.div
            initial = {{y:'-5vh' , opacity:0}}
            animate = {{y:0, opacity:1}}
            transition={{duration:'1.5'}}
            className='my-28'>
            <p className='text-[3.5rem] font-semibold text-topnotch-blue underline-offset-[15px] underline decoration-topnotch-yellow decoration-[5px]'>
              Employment Solution
            </p>
            </motion.div>

            <motion.div className='flex justify-between'
            initial = {{y:'+5vh' , opacity:0}}
            animate = {{y:0, opacity:1}}
            transition={{duration:'1.5'}}
            >
              <motion.div className='w-60'
              >
              <div className='h-60'>
              <img className=' inline' src={TalentIdentificationImage} width="200" alt="TopNotch Logo"></img>
              </div>
              <h1 className='text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue'>Talent Identification</h1>
              </motion.div>
              <div className='w-60'>
              <motion.div className='h-60'
              >
              <img className='inline' src={ProfessionalContractingImage} width="200" alt="TopNotch Logo"></img>
              </motion.div>
              <motion.h1 
              className='block text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue leading-normal'>Professional contracting services</motion.h1>
              </div>
              <div className='w-60'>
              <div className='h-60'>
              <img className='inline' src={HRStrategiesImage} width="200" alt="TopNotch Logo"></img>
              </div>
              <motion.h1 
              className='block text-center tracking-wider font-light text-[1.5rem] text-topnotch-blue leading-normal'>HR Strategies Consultation</motion.h1>
              </div>
            </motion.div>
          </motion.div>

          {/* Employment solution details gold section */}
          <motion.div
          className='my-20 justify-center'>
            <motion.div className=' w-full py-24 bg-topnotch-yellow'>
            {/* <motion.div
            initial = {{y:'-5vh' , opacity:0}}
            animate = {{y:0, opacity:1}}
            transition={{duration:'1'}}
            className='py-16 flex justify-center'>
            <p className='text-[3rem] font-semibold text-topnotch-blue underline-offset-[15px] underline decoration-topnotch-yellow decoration-[5px]'>
              Employment Solution
            </p>
            </motion.div> */}
            <div className='flex py-10'>
            <motion.div className='flex justify-end text-right w-2/5 px-10'>
            <motion.h1 
            initial = {{x:'-3vh' , opacity:0}}
            whileInView = {{x:0, opacity:1}}
            transition={{duration:'1'}}
              className='tracking-wider font-normal uppercase text-[1.5rem] text-topnotch-blue leading-normal'>
                Talent Identification
              </motion.h1>
            </motion.div>
            <motion.div 
            initial = {{x:'+3vh' , opacity:0}}
            whileInView = {{x:0, opacity:1}}
            transition={{duration:'1'}}
            className='w-3/5 px-10 text-slate-200 tracking-wider mr-36 leading-7 text-sm'>
              <p>
              Our experienced Talent Acquisition Team will source candidates according to your liking. We are constantly up-to-date with the latest market intelligence and equipped with an extensive network of working professionals to build a highly competent and skilled workforce. 
              </p>
            </motion.div>
            </div>

            <div className='flex py-10'>
            <motion.div className='flex text-right justify-end w-2/5 px-10'>
            <motion.h1 
            initial = {{x:'-3vh' , opacity:0}}
            whileInView = {{x:0, opacity:1}}
            transition={{duration:'1'}}
              className='tracking-wider font-normal uppercase text-[1.5rem] text-topnotch-blue leading-normal'>
                Professional Contracting Services
              </motion.h1>
            </motion.div>
            <motion.div 
            initial = {{x:'+3vh' , opacity:0}}
            whileInView = {{x:0, opacity:1}}
            transition={{duration:'1'}}
            className='w-3/5 flex px-10 text-slate-200 tracking-wider mr-36 leading-7 text-sm'>
              <p>
              Have a steadily increasing demand for manpower? Let us assist you to find highly-skilled professional contractors to achieve workplace flexibility, productivity, and efficiency. 
              </p>
            </motion.div>
            </div>
            </motion.div>
          </motion.div>

            {/* Contact Us */}
            <motion.div className='w-full flex justify-center my-32'>
              <motion.div className='text-center'>
                <motion.h1 className=' text-8xl font-semibold my-10 flex text-topnotch-blue tracking-wide'>
                  Let's work&nbsp;<h1 className='text-topnotch-yellow'>together</h1>
                </motion.h1>
                <motion.p 
                initial = {{y:'+3vh' , opacity:0}}
                whileInView = {{y:0, opacity:1}}
                transition={{duration:'1.5'}}
                className='text-topnotch-grey text-lg'>
                  Contact us for more information
                </motion.p>
                <motion.div className='my-10 text-4xl text-topnotch-blue tracking-wide'>
                  <button 
                  onClick={() => window.location = 'mailto:haoyin_chong@hotmail.com'}
                  className='rounded-full border-4 px-24 py-5 border-topnotch-yellow'>Contact Us</button>
                </motion.div>
              </motion.div>
            </motion.div>

        </div>
    </div>
  )
}

export default EmploymentSolutionLanding