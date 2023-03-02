import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {LayoutGroup} from 'framer-motion'
import './App.css'
import TopNotchCard from './Components/MainMenu/TopNotchCard'
import EmploymentCard from './Components/MainMenu/EmploymentCard'
import OutsourcedPayrollCard from './Components/MainMenu/OutsourcedPayrollCard'
import SeekingOutCard from './Components/MainMenu/SeekingOutCard'
import {motion} from 'framer-motion'
import HumanResourcesCard from './Components/MainMenu/HumanResourcesCard'
import JoinusCard from './Components/MainMenu/JoinusCard'
import OurstoryCard from './Components/MainMenu/OurstoryCard'
import CareertipsCard from './Components/MainMenu/CareertipsCard'

function App() {
  
  return (
    <div className="">
      <motion.div className="w-auto">
      <LayoutGroup>

      <motion.div className='flex items-end'>
        
        <motion.div>
        <TopNotchCard/>
        <SeekingOutCard />
        </motion.div>

        <motion.div>
        <EmploymentCard />
        <HumanResourcesCard />
        </motion.div>
        
        <motion.div>
        <OutsourcedPayrollCard />
        <JoinusCard />
        </motion.div>
      
        <motion.div>
        <CareertipsCard />
        <OurstoryCard />
        </motion.div>
      </motion.div>
      <motion.div className='flex'>
      
      
      </motion.div>
      </LayoutGroup>
      </motion.div>

    </div>
  )
}

export default App
