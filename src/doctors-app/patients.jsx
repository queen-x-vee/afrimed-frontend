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

const Patients = () => {
  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <Navbar />
        <main className="md:ml-[20rem] w-full bg-[#F7F7F7] ">
          <TopNavbar />
          <div className="px-4 ">
            <div className="flex justify-between items-center">
              <div>
                <span>Status:</span>
                <button className="py-2.5 px-6 bg-[#5D34F3] rounded-2xl text-white mx-4">All</button>
                <button className="py-2.5 px-6 bg-[#EFF1F3] rounded-2xl text-[#696969] mx-4">New</button>
                <button className="py-2.5 px-6 bg-[#EFF1F3] rounded-2xl text-[#696969]">Returning</button>
              </div>
              <div>
                <div className="flex items-center bg-[#CAD0FF] py-3 px-4 rounded-lg">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 12.3125C6.75 12.1633 6.80926 12.0202 6.91475 11.9148C7.02024 11.8093 7.16332 11.75 7.3125 11.75H10.6875C10.8367 11.75 10.9798 11.8093 11.0852 11.9148C11.1907 12.0202 11.25 12.1633 11.25 12.3125C11.25 12.4617 11.1907 12.6048 11.0852 12.7102C10.9798 12.8157 10.8367 12.875 10.6875 12.875H7.3125C7.16332 12.875 7.02024 12.8157 6.91475 12.7102C6.80926 12.6048 6.75 12.4617 6.75 12.3125ZM4.5 8.9375C4.5 8.78832 4.55926 8.64524 4.66475 8.53975C4.77024 8.43426 4.91332 8.375 5.0625 8.375H12.9375C13.0867 8.375 13.2298 8.43426 13.3352 8.53975C13.4407 8.64524 13.5 8.78832 13.5 8.9375C13.5 9.08668 13.4407 9.22976 13.3352 9.33525C13.2298 9.44074 13.0867 9.5 12.9375 9.5H5.0625C4.91332 9.5 4.77024 9.44074 4.66475 9.33525C4.55926 9.22976 4.5 9.08668 4.5 8.9375ZM2.25 5.5625C2.25 5.41332 2.30926 5.27024 2.41475 5.16475C2.52024 5.05926 2.66332 5 2.8125 5H15.1875C15.3367 5 15.4798 5.05926 15.5852 5.16475C15.6907 5.27024 15.75 5.41332 15.75 5.5625C15.75 5.71168 15.6907 5.85476 15.5852 5.96025C15.4798 6.06574 15.3367 6.125 15.1875 6.125H2.8125C2.66332 6.125 2.52024 6.06574 2.41475 5.96025C2.30926 5.85476 2.25 5.71168 2.25 5.5625Z" fill="#020202"/>
</svg>
                <span>Filter</span>
                </div>
              </div>
            </div>
            <div>
              <div className="p-4  ">
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
            </div>
            <div className="bg-white"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Patients;
