import React from "react";
import Dashboard from "../../assests/doctors-dashboard-assets/dashboard.svg";
import Appointment from "../../assests/doctors-dashboard-assets/appointments.svg";
import Patient from "../../assests/doctors-dashboard-assets/patient.svg";
import Message from "../../assests/doctors-dashboard-assets/message.svg";
//import Reports from "../../assests/doctors-dashboard-assets/reports.svg";
import Logo from "../../assests/doctors-dashboard-assets/logo.svg";
import AI from "../../assests/doctors-dashboard-assets/aimedic.svg";
import { NavLink } from "react-router-dom";


const socialRoutes = [
  {
    icon: Dashboard,
    label: "Dashboard",
    href: "/doctor",
  },
  {
    icon: Appointment,
    label: "Appointments",
    href: "/doctor-appointments",
  },
  {
    icon: Patient,
    label: "Patients",
    href: "/doctor-patients",
  },
  {
    icon: Message,
    label: "Messages",
    href: "/doctor-messages",
  },
  {
    icon: AI,
    label: "AI Medic",
    href: "/doctor-ai",
  },
];

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-col bg-[#fffff] h-full md:w-80 fixed top-0 left-0 overflow-y-auto shadow-sm px-4 md:px-10">
      <div className="flex items-center justify-center mt-8 mb-14">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-y-9 items-start mt-9 ">
        {socialRoutes.map((route, index) => {
          return (
            <NavLink
              to={route.href}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#5D34F3] text-white  py-2.5 px-4 flex flex-row items-center gap-x-6 w-full "
                  : "flex flex-row items-center gap-x-6 w-full py-2.5 px-4 text-[#696969] "
              }
            >
            
              <img
                key={index}
                src={route.icon}
                alt={route.label}
                className=" "
              />
              <span className=" hidden md:block font-normal text-base ">
                {route.label}
              </span>
            </NavLink>
          );
        })}
      </div>

      <hr className="border-b border-gray-300 w-full my-4" />
    </nav>
  );
};

export default Navbar;
