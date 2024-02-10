import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import TopNavbar from "../components/TopNavbar";
import First from "../assests/doctors-dashboard-assets/firstCard.svg";
import Second from "../assests/doctors-dashboard-assets/secondCard.svg";
import Third from "../assests/doctors-dashboard-assets/thirdCard.svg";
import Line from "../components/graph/Line.tsx";
import Avatar from "../assests/doctors-dashboard-assets/avatar.svg";

const card = [
  {
    icon: First,
    label: "Appointments",
    backgroundColor: "bg-[#4E5AC3]",
  },
  {
    icon: Second,
    label: "Patients",
    backgroundColor: "bg-[#367E93]",
  },
  {
    icon: Third,
    label: "Reports",
    backgroundColor: "bg-[#EE5656]",
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
        <main className="md:ml-[20rem] pr-12 pl-8 w-full bg-[#F7F7F7] ">
          <TopNavbar />
          <div>
            <div>
              
              <div className=" pt-5 grid grid-cols-3 gap-y-10 gap-x-5">
                {card.map((route, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-white py-3 flex  items-center gap-y-5 rounded-xl p-6`}
                    >
                      <div className="bg-white p-4 rounded-full">
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
                  );
                })}
              </div>
              <div className=" pt-5 grid grid-cols-3 gap-y-10 gap-x-5">
                <div className="col-span-2 bg-white">
                {appointmentPatients.map((patient) => {
                    return (
                      <div
                        key={patient.id}
                        className="grid grid-cols-4 my-7 gap-x-6 border-b border-gray-300"
                      >
                        <div className="flex justify-center items-center gap-x-1">
                          <img
                            src={patient.icon}
                            alt={patient.label}
                            className="w-12 h-12 rounded-full"
                          />
                          <span>{patient.patientName}</span>
                        </div>


                        <span className="flex  justify-center items-center">{patient.gender}</span>
                        
                      </div>
                    );
                  })}
                </div>
                <div className="bg-white h-4/5"></div>
              </div>
              <div className=" pt-2 grid grid-cols-3 gap-y-10 gap-x-5">
                <div className="p-4 col-span-2 bg-white">
                  {recentPatients.map((patient) => {
                    return (
                      <div
                        key={patient.id}
                        className="grid grid-cols-4 my-7 gap-x-6 border-b border-gray-300"
                      >
                        <span className="flex  justify-center items-center">{patient.patientName}</span>

                        <span className="flex  justify-center items-center">{patient.gender}</span>
                        <span  className="flex  justify-center items-center">{patient.lastVisited}</span>
                        <span  className="flex  justify-center items-center">{patient.action}</span>
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
