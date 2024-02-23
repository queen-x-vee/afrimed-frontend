import React from "react";
import PatientNavbar from "../components/patients-components/PatientNavbar";
import PatientTopNavbar from "../components/patients-components/PatientTopNavbar";
import Video from "../assests/patients-dashboard/video.svg";
import Phone from "../assests/patients-dashboard/phone.svg";
import Message from "../assests/patients-dashboard/message.svg";

const recentPatients = [
  {
    patientName: "paul williams",
    visitID: "1",
    date: "12/12/2021",
    email: "doc@gmail.com",
    disease: "Heart attack",
    phone: "0712345678",
    availability: true
  },
  {
    patientName: "paul williams",
    visitID: "2",
    email: "doc@gmail.com",
    phone: "0712345678",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    availability: true,
  },
  {
    patientName: "paul williams",
    visitID: "3",
    email: "doc@gmail.com",
    phone: "0712345678",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "4",
    email: "doc@gmail.com",
    phone: "0712345678",
    status: "Completed",
    action: "Completed",
  },
  {
    patientName: "paul williams",
    visitID: "5",
    email: "doc@gmail.com",
    date: "12/12/2021",
    gender: "male",
    disease: "Heart attack",
    status: "Completed",
    action: "Completed",
  },
];

const Doctors = () => {
  // const [availability, setAvailability] = React.useState(true);
  

  // const declineAppointment = () => {
  //   setAvailability(false);
   
  // };
  // const acceptAppointment = () => {
  //   setAvailability(true);
    
  // };



  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <PatientNavbar />
        <main className="md:ml-[20rem] w-full bg-[#F7F7F7] ">
          <PatientTopNavbar />
          <div className="px-4 ">
            <div>
              <div className="p-4  ">
                <div className="grid grid-cols-6 my-7 gap-x-6  mb-2.5 bg-[#EBEFF2] p-6 font-medium text-lg text-[#696969]">
                  <span className="flex  justify-center items-center">
                    Names
                  </span>
                  <span className="flex  justify-center items-center"> ID</span>
                  <span className="flex  justify-center items-center">
                    Email
                  </span>
                  <span className="flex  justify-center items-center">
                    Phone Number
                  </span>
                  <span className="flex  justify-center items-center">
                    Availability
                  </span>
                  <span className="flex  justify-center items-center">
                    Consult
                  </span>
                </div>
                {recentPatients.map((patient) => {
                  return (
                    <div
                      key={patient.visitID}
                      className="grid grid-cols-6 gap-x-6 text-[#696969] font-normal  bg-white p-6 mb-2.5 "
                    >
                      <span className="flex  justify-center items-center">
                        {patient.patientName}
                      </span>

                      <span className="flex  justify-center items-center">
                        {patient.visitID}
                      </span>

                      <span className="flex  justify-center items-center">
                        {patient.email}
                      </span>
                      <span className="flex  justify-center items-center">
                        {patient.phone}
                      </span>
                      <span className="flex  justify-center items-center">
                      <div
                                // className={
                                //   availaty
                                //     ? "bg-[#DDFFEC] text-[#0A9D4C] py-1.5 px-2.5 rounded "
                                //     : "bg-[#FbiliEEEEF] text-[#FF5363] py-1.5 px-2.5 rounded"
                                // }

                                className="bg-[#DDFFEC] text-[#0A9D4C] py-1.5 px-2.5 rounded "
                              >
                                {/* {availability ? "Accepted" : "Declined"} */}
                                Accepted
                              </div>
                      </span>
                      <span className="flex  justify-between items-center">
                        <img src={Video} alt="video" />
                        <img src={Phone} alt="phone" />
                        <img src={Message} alt="message" />
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
