import React from 'react'
import Footer from '../footer'

const HeartClassification = () => {
  return (
    <div>

        <form className='flex'>
            <div>
            <div className=" px-6 py-[1.25rem]">
                <label>Age</label>
            <input className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white" type="text" placeholder="Enter your email address"/>
            
          </div>
            </div>
            <div></div>
            <div className="flex justify-between  bg-[#F6F6F6]/30 w-[32rem]">
            <input className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white" type="text" placeholder="Enter your email address"/>
            <button className="py-4 px-7 bg-[#2C1E60] text-white">Subscribe</button>
          </div>
        </form>

        <Footer/>
    </div>
  )
}

export default HeartClassification