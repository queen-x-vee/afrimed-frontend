import React from 'react'
import Seamless from "../../assests/landingpage/seamlessjourney.svg";

const SeamlessJourney = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full my-20 px-6 md:px-20 md:py-10 '>
        <div className='flex justify-center items-center'>
          <div className='w-[34.188rem]'>
          <img src={Seamless} alt="seamless" className='w-full h-full' />
          </div>
         </div>
         <div className='px-16'> 
            <p className='text-[#020202] font-bold text-4xl mb-10'>Discover the Seamless Journey</p>
            <div>
              <div className='flex  items-center gap-12 mb-8'>
                <div className='flex flex-col items-center'>
                  <span className='text-[#5D34F3] font-normal text-5xl'>01</span>
                  <span className='h-[3.575rem] w-[2px] bg-[#020202]'></span>
                </div>
                <div className='flex flex-col items-start gap-4'>
                  <span className='text-[#020202] font-medium text-2xl'>Sign Up as a Patient/Doctor</span>
                  <span className='text-[#6B6666] text-lg font-normal'>Submit the form on the register page.</span>
                </div>
              </div>
              <div className='flex  items-center gap-12 mb-8'>
                <div className='flex flex-col items-center'>
                  <span className='text-[#5D34F3] font-normal text-5xl'>02</span>
                  <span className='h-[3.575rem] w-[2px] bg-[#020202]'></span>
                </div>
                <div className='flex flex-col items-start gap-4'>
                  <span className='text-[#020202] font-medium text-2xl'>Appointment Scheduling:</span>
                  <span className='text-[#6B6666] text-lg font-normal'>Enable patients and doctors to schedule virtual consultations based on their preferred time slots.</span>
                </div>
              </div>
              <div className='flex  items-center gap-12 mb-8'>
                <div className='flex flex-col items-center'>
                  <span className='text-[#5D34F3] font-normal text-5xl'>03</span>
                  <span className='h-[3.575rem] w-[2px] bg-[#020202]'></span>
                </div>
                <div className='flex flex-col items-start gap-4'>
                  <span className='text-[#020202] font-medium text-2xl'>Consultations:</span>
                  <span className='text-[#6B6666] text-lg font-normal'>Utilize the platform's tools for effective communication and examination.</span>
                </div>
              </div>
              <div className='flex  items-center gap-12 mb-8'>
                <div className='flex flex-col items-center'>
                  <span className='text-[#5D34F3] font-normal text-5xl'>04</span>
                  <span className='h-[3.575rem] w-[2px] bg-[#020202]'></span>
                </div>
                <div className='flex flex-col items-start gap-4'>
                  <span className='text-[#020202] font-medium text-2xl'>AI-Powered Chat:</span>
                  <span className='text-[#6B6666] text-lg font-normal'>Access AI-powered chats for seamless diagnostic process.</span>
                </div>
              </div>
              
              <div></div>
            </div>
         </div>
    </div>
  )
}

export default SeamlessJourney