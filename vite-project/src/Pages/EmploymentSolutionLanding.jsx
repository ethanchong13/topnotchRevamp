import React from 'react'
import TopnotchLogo from '../assets/Images/topnotch_onlylogo.png'

const EmploymentSolutionLanding = () => {
  return (
    <div className='flex min-w-max overflow-hidden'>
        <div className='min-w-full block'>
          <div className='mx-24 border-b flex'>
              <img className='py-8' src={TopnotchLogo} width="150" alt="TopNotch Logo"></img>            
          </div>
          <div className='block py-36'>
                <div className='flex justify-center mx-40 mb-10'>
                  <div className='block'>
                    <h1 className='text-[4.5rem] tracking-widest font-semibold text-topnotch-blue text-center'>TALENT BEYOND</h1>                
                    <h1 className='text-[4.5rem] tracking-widest font-semibold text-center text-topnotch-yellow'>EXCELLENCE</h1>
                  <div className='w-[50rem] py-10'>
                  <h5 className='text-center tracking-wider font-light text-[1.2rem] text-topnotch-grey'>Whether it's <b className='font-semibold'>executive search, contracting</b> or <b className='font-semibold'>outsourced payroll</b>, we're a team of highly dedicated <b className='font-semibold underline-offset-8 underline decoration-topnotch-yellow decoration-4'>HR professionals in Malaysia</b> ready at your service.</h5>
                  </div>
                  </div>
                </div>
          </div> 
          
        </div>
    </div>
  )
}

export default EmploymentSolutionLanding