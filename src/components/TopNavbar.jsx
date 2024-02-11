import React from "react";
import Notifications from "../assests/doctors-dashboard-assets/notificationbell.svg";
import Profile from "../assests/doctors-dashboard-assets/doctorsprofilepic.svg";

const TopNavbar = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-start mt-10">
        <span className="font-bold text-3xl">Welcome Dr Taiwo</span>
        <span className="font-normal text-xl">Heart Specialist</span>
      </div>
      <div>
        <img src={Notifications} alt="notifications" />
        <div>
          <img src={Profile} alt="profile" />
          <div>
            <span className="text-xl font-bold">Taiwo Ojo</span>
            <span className="text-sm">30 years old</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopNavbar;
