import React from "react";
import Navbar from "../components/doctors-components/Navbar";
import TopNavbar from "../components/doctors-components/TopNavbar";

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

const Doctors = () => {
  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <Navbar />
        <main className="md:ml-[20rem] w-full bg-[#F7F7F7] ">
          <TopNavbar/>
        <div className="px-4 ">
          <div>
            <div>
              <span>Status:</span>
              <button>All</button>
              <button>New</button>
              <button>Returning</button>

            </div>
            <div>

            </div>
          </div>
         <div>
         <div className="p-4  ">
          <div className="grid grid-cols-6 my-7 gap-x-6  mb-2.5 bg-[#EBEFF2] p-6 font-medium text-lg text-[#696969]">
            <span className="flex  justify-center items-center">Names</span>
            <span className="flex  justify-center items-center"> ID</span>
            <span className="flex  justify-center items-center">Email</span>
            <span className="flex  justify-center items-center">Phone Number</span>
            <span className="flex  justify-center items-center">Availability</span>
            <span className="flex  justify-center items-center">Consult</span>
           
          </div>
            {recentPatients.map((patient) => {
              return (
                <div
                  key={patient.visitID}
                  className="grid grid-cols-7 text-[#696969] font-normal  bg-white p-6 mb-2.5 "
                >
                  <span className="flex  justify-center items-center">
                    {patient.patientName}
                  </span>
                  
                  <span className="flex  justify-center items-center">
                    {patient.visitID}
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
                    {patient.status}
                  </span>
                 
                </div>
              );
            })}
          </div>
         </div>
          <div className="bg-white"></div>
        </div>
        </main>
      </div>
    </>
  );
};

export default Doctors;
