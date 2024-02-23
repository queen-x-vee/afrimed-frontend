import React from 'react'
import Heart from '../../assests/landingpage/heart.svg'
import WavingHands from '../../assests/landingpage/wavinghands.svg'
import { Link } from 'react-router-dom'

const HeartTest= () => {
  return (
    <div className='flex w-full justify-between bg-[#F2F6FA] '>
        <div className='pl-20 py-8 pr-80'>
            <div className='flex flex-col justify-around items-start h-full'>
                <div className='flex items-center'>
                    <img src={WavingHands} alt='wave'/>
                    <span className='text-base text-[#5D34F3]'>Get Free Heart Diagnosis!</span>
                </div>
                <div className='w-[27rem]'>
                <p className='text-4xl text-[#252424] font-bold'>Need quick heart test?</p>
                <p className='text-lg text-[#6B6666]'>If you having any heart issues symptoms, click the button below to fill a fom and get your diagnosis.</p>
                </div>
                <Link to='/heart-classification'>
                <button
          to="/signup"
          className="text-xs font-bold py-3 px-6 md:py-4 md:px-12 text-white bg-[#5D34F3] rounded-lg"
        >
        Try it for free
        </button>
                </Link>
            </div>

        </div>
        <div className=''>
            <img src= {Heart} alt="Heart" className='' />
        </div>

    </div>
  )
}

export default HeartTest
