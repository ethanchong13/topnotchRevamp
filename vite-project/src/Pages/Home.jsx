import {motion , LayoutGroup} from 'framer-motion'

import TopNotchCard from '../Components/MainMenu/TopNotchCard'
import EmploymentCard from '../Components/MainMenu/EmploymentCard'
import OutsourcedPayrollCard from '../Components/MainMenu/OutsourcedPayrollCard'
import SeekingOutCard from '../Components/MainMenu/SeekingOutCard'
import HumanResourcesCard from '../Components/MainMenu/HumanResourcesCard'
import JoinusCard from '../Components/MainMenu/JoinusCard'
import OurstoryCard from '../Components/MainMenu/OurstoryCard'
import CareertipsCard from '../Components/MainMenu/CareertipsCard'

const Home = () => {
  return (
    
    <motion.div className="flex min-w-max w-screen">
      
    
      <motion.div className='flex w-full min-h-screen place-items-center justify-center'
      >
        <LayoutGroup>
          <motion.div className='place-items-end flex'>
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
  
        </LayoutGroup>
      </motion.div> 

      </motion.div>
  )
}

export default Home