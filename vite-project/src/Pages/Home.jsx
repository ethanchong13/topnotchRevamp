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
    <motion.div className="min-h-screen w-screen flex place-items-center">
      <LayoutGroup>
    
      <motion.div className='flex items-end my-0 mx-auto'>
        
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
  )
}

export default Home