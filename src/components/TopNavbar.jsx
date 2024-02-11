import React from "react";
import Notifications from "../assests/doctors-dashboard-assets/notificationbell.svg";
import Profile from "../assests/doctors-dashboard-assets/doctorsprofilepic.svg";

const TopNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-11 py-6 bg-[#FFFFFF] mb-10">
      <div className="flex flex-col justify-between gap-5 items-start">
        <span className="font-semibold text-2xl text-[#0D0D0F]">Welcome Dr Taiwo</span>
        <span className="font-normal text-base text-[#0A9D4C]">Heart Specialist</span>
      </div>
      <div className="flex flex-row gap-x-10 items-center">
        <div className={`bg-[#D9D9D9] p-4 rounded-full`}>
          <img src={Notifications} alt={"notification"} />
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex  justify-center items-center">
            <img src={Profile} alt="profile" />
          </div>
          <div className="flex flex-col justify-center items-start gap-x-1">
            <span className="text-base  font-medium">Taiwo Ojo</span>
            <span className="text-xs md:text-sm text-[#000000]/70">30 years old</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
