import React from "react";
import Navbar from "../components/doctors-components/Navbar";
import {NavLink} from "react-router-dom";
import Avatar from "../assests/doctors-dashboard-assets/avatar.svg";
import Accept from "../assests/doctors-dashboard-assets/accept.svg";
import Decline from "../assests/doctors-dashboard-assets/decline.svg";
import Forward from "../assests/doctors-dashboard-assets/forward.svg";
import TopNavbar from "../components/doctors-components/TopNavbar";

const appointmentPatients = [
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "1",
    gender: "male",
    age: "21",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "2",
    gender: "male",
    age: "21",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "3",
    gender: "male",
    age: "21",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "4",
    gender: "male",
    age: "21",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "5",
    gender: "male",
    age: "21",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
];

const Appointment = () => {

  const [appointment, setAppointment] = React.useState(true);
  const [show, setShow] = React.useState(true);

  const declineAppointment = () => {
    setAppointment(false);
    setShow(true);
  };
  const acceptAppointment = () => {
    setAppointment(true);
    setShow(true);
  };

  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <Navbar />
        <main className="md:ml-[20rem]  w-full bg-[#F7F7F7] ">
          <TopNavbar/>
        <div className="px-12">
                <div className=" ">
                  <div>
                    <span className="font-medium text-lg md:text-2xl">Appointment Request</span>
                    <NavLink>
                    <button className="text-base flex">View all
                    <img src={Forward} alt="forward" className="w-4 h-4 ml-1" />
                    </button>
                    </NavLink>
                  </div>
                  <div className="bg-white p-4">
                    {appointmentPatients.map((patient) => {
                      return (
                        <div
                          key={patient.id}
                          className="flex justify-between my-7 "
                        >
                          <div className="flex justify-center items-center gap-x-1">
                            <img
                              src={patient.icon}
                              alt={patient.label}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex flex-col justify-center items-start gap-2">
                              <span className="font-medium text-4xl tet-[#212529]">{patient.patientName}</span>
                              <span className="font-normal text-2xl text-[#696969] flex  justify-center items-center">
                                {" "}
                                {patient.age} {patient.gender}{" "}
                                {patient.lastVisited}{" "}
                              </span>
                            </div>
                          </div>

                          {!show&& (
                            <div className="flex items-center gap-1 justify-between">
                            <div className="py-[9px] px-1.5 bg-[#DDFFEC]  flex items-center justify-center">
                              <img
                                src={Accept}
                                alt="accept"
                                onClick={acceptAppointment}
                              />
                            </div>
                            <div className="py-[9px]  px-1.5 bg-[#FEEEEF] flex items-center justify-center">
                              <img
                                src={Decline}
                                alt="decline"
                                onClick={declineAppointment}
                              />
                            </div>
                          </div>

                          )}
                          
                          {show&&(
                           <div className="flex items-center justify-center">
                             <div
                            className={
                              appointment
                                ? "bg-[#DDFFEC] text-[#0A9D4C] h-10 py-1.5 px-2.5  "
                                : "bg-[#FEEEEF] text-[#FF5363] py-1.5 px-2.5"
                            }
                          >
                            {appointment ? "Accepted" : "Declined"}
                          </div>
                           </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
              </div>
        </main>
      </div>
    </>
  );
};

export default Appointment;
