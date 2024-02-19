import React from 'react'
import Seamless from "../../assests/landingpage/seamlessjourney.svg";

const SeamlessJourney = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full my-20'>
        <div className='flex justify-center items-center'>
          <div className='w-[34.188rem]'>
          <img src={Seamless} alt="seamless" className='w-full h-full' />
          </div>
         </div>
         <div>
            <p>Discover the Seamless Journey</p>
         </div>
    </div>
  )
}

export default SeamlessJourney