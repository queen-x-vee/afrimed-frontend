import React from "react";
import Dashboard from "../assests/doctors-dashboard-assets/dashboard.svg";
import Appointment from "../assests/doctors-dashboard-assets/appointments.svg";
import Patient from "../assests/doctors-dashboard-assets/patient.svg";
import Message from "../assests/doctors-dashboard-assets/message.svg";
import Reports from "../assests/doctors-dashboard-assets/reports.svg";
import { Link } from "react-router-dom";

const socialRoutes = [
  {
    icon: Dashboard,
    label: "Dashboard",
  },
  {
    icon: Appointment,
    label: "About me",
    href: "about-me",
  },
  {
    icon: Patient,
    label: "Home",
    href: "/",

    collapsible: true,
  },
  {
    icon: Message,
    label: "About me",
    href: "about-me",
  },
  {
    icon: Reports,
    label: "About me",
    href: "about-me",
  },
];

const Navbar = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-[#fffff] h-full w-80 fixed top-0 left-0 overflow-y-auto shadow-sm px-12">
      <div className="flex flex-col gap-y-9 items-start mt-9 ">
        {socialRoutes.map((route, index) => {
          return (
            <Link
              to={route.href}
              key={index}
              className="flex flex-row items-center gap-x-4"
            >
              <img
                key={index}
                src={route.icon}
                alt={route.label}
                className="w-12 h-12"
              />
              <span
                className="text-[#696969] font-medium text-2xl"
              >
                {route.label}
              </span>
            </Link>
          );
        })}
      </div>

      <hr className="border-b border-gray-300 w-full my-4" />
    </nav>
  );
};

export default Navbar;
