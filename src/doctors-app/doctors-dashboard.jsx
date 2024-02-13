import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import TopNavbar from "../components/TopNavbar";
import First from "../assests/doctors-dashboard-assets/firstCard.svg";
import Second from "../assests/doctors-dashboard-assets/secondCard.svg";
import Third from "../assests/doctors-dashboard-assets/thirdCard.svg";
import { NavLink } from "react-router-dom";
//import Fourth from "../assests/doctors-dashboard-assets/fourthCard.svg";
import Accept from "../assests/doctors-dashboard-assets/accept.svg";
import Decline from "../assests/doctors-dashboard-assets/decline.svg";
import Arrow from "../assests/doctors-dashboard-assets/arrowup.svg";
import Forward from "../assests/doctors-dashboard-assets/forward.svg";
import FirstArticle from "../assests/doctors-dashboard-assets/firstArticle.svg";
//import Line from "../components/graph/Line.tsx";
import Avatar from "../assests/doctors-dashboard-assets/avatar.svg";
import Calendar from "../components/Calender";

const card = [
  {
    icon: First,
    label: "Appointments",
    backgroundColor: "bg-[#ECECFF]",
    figure: "129",
  },
  {
    icon: Second,
    label: "Patients",
    backgroundColor: "bg-[#CFE0F6]",
    figure: "129",
  },

  {
    icon: Third,
    label: "Reports",
    backgroundColor: "bg-[#FFDFE4]",
    figure: "129",
  },
];

const recentPatients = [
  {
    patientName: "paul williams",
    visitID: "1",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "2",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "3",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "4",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "5",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
];

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

const DoctorsDashboard = () => {
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
          <TopNavbar />
          <div>
            <div className="px-4">
              <div>
                <div className=" pt-5 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-2">
                  {card.map((route, index) => {
                    return (
                      <div
                        key={index}
                        className={`bg-white py-3 flex   flex-col  gap-y-5 rounded-xl p-2`}
                      >
                        <div className="flex items-center gap-x-4">
                          <div
                            className={`${route.backgroundColor} p-3 md:p-4 rounded-full`}
                          >
                            <img
                              src={route.icon}
                              alt={route.label}
                              className="w-10 h-10 md:w-12 md:h-12"
                            />
                          </div>
                          <div className=" font-medium text-xl md:text-2xl">
                            {route.label}
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="font-medium text-xl md:text-3xl">
                            {route.figure}
                          </div>
                          <div className="flex items-center gap-x-2">
                            <span className="font-500 text-sm text-[#0A9D4C] flex">
                              <img src={Arrow} alt="arrow" />
                              {"40"}%
                            </span>
                            <span className="font-normal text-xs text-[#93939A]">
                              from last week
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 pt-5 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5">
                  <div className=" col-span-1 md:col-span-2 ">
                    <div className="flex items-center justify-between gap-x-5 mb-5 md:mb-10">
                      <span className="font-medium text-lg md:text-2xl">
                        Appointment Request
                      </span>
                      <NavLink>
                        <button className="font-medium text-base text-[#1E4AF0] flex items-center">
                          View all
                          <img
                            src={Forward}
                            alt="forward"
                            className="w-4 h-4 ml-1"
                          />
                        </button>
                      </NavLink>
                    </div>
                    <div className="bg-white p-4">
                      {appointmentPatients.map((patient) => {
                        return (
                          <div
                            key={patient.id}
                            className="flex items-center justify-between my-7 "
                          >
                            <div className="flex justify-center items-center gap-x-1">
                              <img
                                src={patient.icon}
                                alt={patient.label}
                                className="w-12 h-12 rounded-full"
                              />
                              <div className="flex flex-col justify-center items-start gap-x-1">
                                <span className="font-medium text-lg md:text-2xl  text-[#212529]">
                                  {patient.patientName}
                                </span>
                                <span className="font-normal text-base text-[#696969] flex  justify-center items-center">
                                  {" "}
                                  {patient.age} {patient.gender}{" "}
                                  {patient.lastVisited}{" "}
                                </span>
                              </div>
                            </div>

                            {!show && (
                              <div className="flex gap-x-1">
                                <div className="py-[9x] px-1.5 bg-[#DDFFEC]  flex items-center justify-center">
                                  <img
                                    src={Accept}
                                    alt="accept"
                                    onClick={acceptAppointment}
                                  />
                                </div>
                                <div className="py-[9x] px-1.5 bg-[#FEEEEF] flex items-center justify-center">
                                  <img
                                    src={Decline}
                                    alt="decline"
                                    onClick={declineAppointment}
                                  />
                                </div>
                              </div>
                            )}

                            {show && (
                              <div
                                className={
                                  appointment
                                    ? "bg-[#DDFFEC] text-[#0A9D4C] py-1.5 px-2.5 rounded "
                                    : "bg-[#FEEEEF] text-[#FF5363] py-1.5 px-2.5 rounded"
                                }
                              >
                                {appointment ? "Accepted" : "Declined"}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-white md:h-5/6 p-3 rounded-lg">
                    <Calendar />
                  </div>
                </div>
                <div className=" pt-2 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5">
                  <div className="p-4 col-span-1 md:col-span-2 ">
                    <div className="flex items-center justify-between gap-x-5 mt-5 mb-5 md:mt-10 md:mb-10">
                      <span className="font-medium text-lg md:text-2xl">
                        Recent Patients
                      </span>
                      <NavLink>
                        <button className="font-medium text-base text-[#1E4AF0] flex items-center">
                          View all
                          <img
                            src={Forward}
                            alt="forward"
                            className="w-4 h-4 ml-1"
                          />
                        </button>
                      </NavLink>
                    </div>

                    <div className="grid grid-cols-5 my-4 md:my-7 gap-x-6  mb-2.5 bg-[#EBEFF2] px-4 py-6 font-medium text-base md:text-lg text-[#696969]">
                      <span className="flex  tracking-tighter justify-center items-center">
                        Patient Names
                      </span>

                      <span className="flex  tracking-tighter  justify-center items-center">
                        Date
                      </span>
                      <span className="flex  tracking-tighter  justify-center items-center">
                        Gender
                      </span>
                      <span className="flex  tracking-tighter  justify-center items-center">
                        Disease
                      </span>

                      <span className="flex  tracking-tighter xs justify-center items-center">
                        Action
                      </span>
                    </div>
                    {recentPatients.map((patient) => {
                      return (
                        <div
                          key={patient.id}
                          className="grid grid-cols-5 text-[#696969] font-normal  bg-white px-4 py-6 mb-2.5"
                        >
                          <span className="flex  justify-center items-center">
                            {patient.patientName}
                          </span>
                          <span className="flex  justify-center items-center">
                            {patient.date}
                          </span>

                          <span className="flex  justify-center items-center">
                            {patient.gender}
                          </span>
                          <span className="flex  justify-center items-center">
                            {patient.disease}
                          </span>
                          
                          <span className="flex  justify-center items-center">
                            {patient.action}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div >
                    <div className="font-bold text-3xl">
                      Articles
                    </div>
                    <div className="bg-white rounded-2xl border border-[#F0F0F0] p-4 mb-3 md:mb-5">

                      <div> <span className="px-2 mr-4 bg-[#BFEBBF] rounded-full"></span> <span className="font-normal text-xs text-black/40">DAILY READ</span></div>
                      <div className="font-semibold text-[#000000] text-base md:text-lg my-5 md-my-7" >Tablets provisions in Lagos</div>
                      <div>
                        <img src={FirstArticle} alt="article" />
                      </div>


                    </div>
                    <div className="bg-white rounded-2xl border border-[#F0F0F0] p-4">

                      <div> <span className="px-2 mr-4 bg-[#BFEBBF] rounded-full"></span> <span className="font-normal text-xs text-black/40">DAILY READ</span></div>
                      <div className="font-semibold text-[#000000] text-base md:text-lg my-5 md-my-7" >Tablets provisions in Lagos</div>
                      <div>
                        <img src={FirstArticle} alt="article" />
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DoctorsDashboard;
