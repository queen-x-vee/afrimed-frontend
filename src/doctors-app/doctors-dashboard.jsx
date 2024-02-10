import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import TopNavbar from "../components/TopNavbar";
import First from "../assests/doctors-dashboard-assets/firstCard.svg";
import Second from "../assests/doctors-dashboard-assets/secondCard.svg";
import Third from "../assests/doctors-dashboard-assets/thirdCard.svg";
import Fourth from "../assests/doctors-dashboard-assets/fourthCard.svg";
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
  {
    icon: Fourth,
    label: "Reports",
    backgroundColor: "bg-[#E9FFE5]",
    figure: "129",
  },
];

const recentPatients = [
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "1",
    gender: "male",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "2",
    gender: "male",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "3",
    gender: "male",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "4",
    gender: "male",
    lastVisited: "12/12/2021",
    action: "Completed",
  },
  {
    icon: Avatar,
    patientName: "paul williams",
    id: "5",
    gender: "male",
    lastVisited: "12/12/2021",
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
  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <Navbar />
        <main className="md:ml-[20rem] px-4 w-full bg-[#F7F7F7] ">
          <TopNavbar />
          <div>
            <div>
              <div className=" pt-5 grid grid-cols-4 gap-y-10 gap-x-2">
                {card.map((route, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-white py-3 flex  flex-col  gap-y-5 rounded-xl p-2`}
                    >
                      <div className="flex items-center gap-x-4">
                        <div
                          className={`${route.backgroundColor} p-4 rounded-full`}
                        >
                          <img
                            src={route.icon}
                            alt={route.label}
                            className="w-12 h-12"
                          />
                        </div>
                        <div className=" font-medium text-2xl">
                          {route.label}
                        </div>
                      </div>
                      <div>{route.figure}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 pt-5 grid grid-cols-3 gap-y-10 gap-x-5">
                <div className="col-span-2 ">
                    <div>
                        <span className="font-bold text-xl">Recent Patients</span>
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
                          <div className="flex flex-col justify-center items-start gap-x-1">
                            <span>{patient.patientName}</span>
                            <span className="flex  justify-center items-center">
                              {" "}
                              {patient.age} {patient.gender}{" "}
                              {patient.lastVisited}{" "}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          {patient.action}
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                <div className="bg-white h-5/6 p-3 rounded-lg">
                    <Calendar/>
                </div>
              </div>
              <div className=" pt-2 grid grid-cols-3 gap-y-10 gap-x-5">
                <div className="p-4 col-span-2 bg-white">
                  {recentPatients.map((patient) => {
                    return (
                      <div
                        key={patient.id}
                        className="grid grid-cols-4 my-7 gap-x-6 border-b border-gray-300"
                      >
                        <span className="flex  justify-center items-center">
                          {patient.patientName}
                        </span>

                        <span className="flex  justify-center items-center">
                          {patient.gender}
                        </span>
                        <span className="flex  justify-center items-center">
                          {patient.lastVisited}
                        </span>
                        <span className="flex  justify-center items-center">
                          {patient.action}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-white"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DoctorsDashboard;
