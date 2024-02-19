import React from 'react'
import AIMedic from "../../assests/landingpage/aimedicdoc.svg";
import Bulb from "../../assests/landingpage/bulb.svg";

const First = () => {
  return (
    <div className='relative'><div className="grid grid-cols-1 md:grid-cols-2 w-full my-20">
    <div className="bg-red-500 ">
      <div className="w-[22.5rem] absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1">
        <img src={AIMedic} alt="AI-Medic" className="w-full h-full" />
      </div>
      <div className="w-[24rem] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 absolute top-1/4 left-0">
        <div className="flex items-center">
          <img src={Bulb} alt="bulb" />
          <span className="font-medium text-lg text-[#020202]">Get Tips About Your Health</span>
        </div>
        <p className="text-xs font-normal text-[#6B6666]">
          Make informed decisions about your health with the support of
          cutting-edge technology{" "}
        </p>
      </div>
    </div>
    <div></div>
    </div></div>
  )
}

export default First