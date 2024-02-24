import React, { useEffect, useState } from "react";
import PatientNavbar from "../components/patients-components/PatientNavbar";
import PatientTopNavbar from "../components/patients-components/PatientTopNavbar";
// import Video from "../assests/patients-dashboard/video.svg";
// import Phone from "../assests/patients-dashboard/phone.svg";
import Message from "../assests/patients-dashboard/message.svg";
import useAuthStore from "../stores/authStore";

// const recentPatients = [
//   {
//     patientName: "paul williams",
//     visitID: "1",
//     date: "12/12/2021",
//     email: "doc@gmail.com",
//     disease: "Heart attack",
//     phone: "0712345678",
//     availability: true,
//   },
//   {
//     patientName: "paul williams",
//     visitID: "2",
//     email: "doc@gmail.com",
//     phone: "0712345678",
//     date: "12/12/2021",
//     gender: "male",
//     disease: "Heart attack",
//     availability: true,
//   },
//   {
//     patientName: "paul williams",
//     visitID: "3",
//     email: "doc@gmail.com",
//     phone: "0712345678",
//     date: "12/12/2021",
//     gender: "male",
//     disease: "Heart attack",
//     status: "Completed",
//     action: "Completed",
//   },
//   {
//     patientName: "paul williams",
//     visitID: "4",
//     email: "doc@gmail.com",
//     phone: "0712345678",
//     status: "Completed",
//     action: "Completed",
//   },
//   {
//     patientName: "paul williams",
//     visitID: "5",
//     email: "doc@gmail.com",
//     date: "12/12/2021",
//     gender: "male",
//     disease: "Heart attack",
//     status: "Completed",
//     action: "Completed",
//   },
// ];

const Doctors = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [doctors, setDoctors] = useState([]);
  const [startDate, setStartDate] = useState("");
  // const [availability, setAvailability] = React.useState(true);

  // const declineAppointment = () => {
  //   setAvailability(false);

  // };
  // const acceptAppointment = () => {
  //   setAvailability(true);

  // };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await (
          await fetch(`https://api-afrimed.vercel.app/api/practitioners/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "content-type": "application/json",
            },
          })
        ).json();

        setDoctors(res?.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, [accessToken]);

  const handleConsult = async (e) => {
    // e.preventDefault();

    try {
      const res = await (
        await fetch(
          `https://api-afrimed.vercel.app/api/appointments/practitioners/${e}/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "content-type": "application/json",
            },
            body: JSON.stringify({ duration: 1, start_date: startDate }),
          }
        )
      ).json();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
                {doctors ? (
                  doctors?.map(({ name, id, email }, index) => {
                    return (
                      <div
                        key={index + 1}
                        className="grid grid-cols-6 gap-x-6 text-[#696969] font-normal  bg-white p-6 mb-2.5 "
                      >
                        <span className="flex  justify-center items-center">
                          {name}
                        </span>

                        <span className="flex  justify-center items-center">
                          {index + 1}
                        </span>

                        <span className="flex  justify-center items-center">
                          {email}
                        </span>
                        <span className="flex  justify-center items-center">
                          08034783534
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
                            Available
                          </div>
                        </span>
                        <span className="flex  justify-between items-center">
                          {/* <img src={Video} alt="video" /> */}
                          {/* <img src={Phone} alt="phone" /> */}
                          &nbsp;
                          <input
                            type="datetime-local"
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                          <img
                            className="ml-2"
                            src={Message}
                            alt="message"
                            onClick={() => handleConsult(id)}
                          />
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <h1> Fetching Doctors...</h1>
                )}
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
