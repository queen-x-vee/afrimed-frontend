import React from "react";
import Navbar from "../components/doctors-components/Navbar";
import Avatar from "../assests/doctors-dashboard-assets/avatar.svg";
import Accept from "../assests/doctors-dashboard-assets/accept.svg";
import Decline from "../assests/doctors-dashboard-assets/decline.svg";
import AppointmentBanner from "../assests/doctors-dashboard-assets/appointmentbanner.svg"
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
          <TopNavbar />
          <div className="px-8">
            <div className=" ">
              <div className="background-image rounded-xl mb-10 flex items-center justify-between p-4">
                <div className="flex flex-col items-start gap-3">
                  <p className="font-semibold text-4xl text-[#F8F9FF]">Next Appointment</p>
                  <p className="font-normal text-lg text-[#ECECEF]">Consultation Sessions</p>
                </div>
                <div className="py-2.5 px-9 bg-[#5D34F3] rounded-lg text-white">
                  <button>Open</button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span>Status:</span>
                  <button className="py-2.5 px-6 bg-[#5D34F3] rounded-2xl text-white mx-4">
                    All
                  </button>
                  <button className="py-2.5 px-6 bg-[#EFF1F3] rounded-2xl text-[#696969] mx-4">
                    New
                  </button>
                  <button className="py-2.5 px-6 bg-[#EFF1F3] rounded-2xl text-[#696969]">
                    Returning
                  </button>
                </div>
                <div>
                  <div className="flex items-center bg-[#CAD0FF] py-3 px-4 rounded-lg">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 12.3125C6.75 12.1633 6.80926 12.0202 6.91475 11.9148C7.02024 11.8093 7.16332 11.75 7.3125 11.75H10.6875C10.8367 11.75 10.9798 11.8093 11.0852 11.9148C11.1907 12.0202 11.25 12.1633 11.25 12.3125C11.25 12.4617 11.1907 12.6048 11.0852 12.7102C10.9798 12.8157 10.8367 12.875 10.6875 12.875H7.3125C7.16332 12.875 7.02024 12.8157 6.91475 12.7102C6.80926 12.6048 6.75 12.4617 6.75 12.3125ZM4.5 8.9375C4.5 8.78832 4.55926 8.64524 4.66475 8.53975C4.77024 8.43426 4.91332 8.375 5.0625 8.375H12.9375C13.0867 8.375 13.2298 8.43426 13.3352 8.53975C13.4407 8.64524 13.5 8.78832 13.5 8.9375C13.5 9.08668 13.4407 9.22976 13.3352 9.33525C13.2298 9.44074 13.0867 9.5 12.9375 9.5H5.0625C4.91332 9.5 4.77024 9.44074 4.66475 9.33525C4.55926 9.22976 4.5 9.08668 4.5 8.9375ZM2.25 5.5625C2.25 5.41332 2.30926 5.27024 2.41475 5.16475C2.52024 5.05926 2.66332 5 2.8125 5H15.1875C15.3367 5 15.4798 5.05926 15.5852 5.16475C15.6907 5.27024 15.75 5.41332 15.75 5.5625C15.75 5.71168 15.6907 5.85476 15.5852 5.96025C15.4798 6.06574 15.3367 6.125 15.1875 6.125H2.8125C2.66332 6.125 2.52024 6.06574 2.41475 5.96025C2.30926 5.85476 2.25 5.71168 2.25 5.5625Z"
                        fill="#020202"
                      />
                    </svg>
                    <span>Filter</span>
                  </div>
                </div>
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
                          <span className="font-medium text-4xl tet-[#212529]">
                            {patient.patientName}
                          </span>
                          <span className="font-normal text-2xl text-[#696969] flex  justify-center items-center">
                            {" "}
                            {patient.age} {patient.gender} {patient.lastVisited}{" "}
                          </span>
                        </div>
                      </div>

                      {!show && (
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

                      {show && (
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
        <style jsx>{`
        .container {
          position: relative;
        }

        .background-image {
          background-image:url(${AppointmentBanner});/* Replace 'path/to/your/image.jpg' with your image path */
          background-size: cover;
          background-position: center;
          width: 100%;
        }
        

        /* Style for the text or content */
        .background-image h1,
        .background-image .left,
        .background-image .right,
        .background-image .sub-text {
          position: relative;
          z-index: 1; /* Ensure text appears above the overlay */
        }
      `}</style>
      </div>
    </>
  );
};

export default Appointment;
