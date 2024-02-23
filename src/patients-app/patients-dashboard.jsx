import React, { useEffect, useState } from "react";
import PatientNavbar from "../components/patients-components/PatientNavbar";
import "../index.css";
import PatientTopNavbar from "../components/patients-components/PatientTopNavbar";
import Doctor from "../assests/doctors-dashboard-assets/doctorsprofilepic.svg";
import ChatComponent from "../components/patients-components/AIChat";
//import Line from "../components/doctors-components/graph/Line.tsx"
//import Fourth from "../assests/doctors-dashboard-assets/fourthCard.svg";
import Calender from "../assests/patients-dashboard/calender.svg";
import useAuthStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const PatientsDashboard = () => {
  const navigate = useNavigate();
  // const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  // -------- Grab Image ------------------
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));

    console.log(e.target.result);
  };

  const data = {
    image: profileImage,
  };

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate(user?.type === "patient" ? "/patient" : "/doctor");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className=" h-full flex m-0 p-0 ">
        <PatientNavbar />
        <main className="md:ml-[20rem]  w-full bg-[#F7F7F7] ">
          <PatientTopNavbar />
          <div>
            <div className="px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
                <div className="col-span-1 md:col-span-2 ">
                  <div className="">
                    <div className="rounded-[30px] bg-[#E2E4F9] flex items-center justify-around p-1.5 md:w-3/5 mx-auto mb-4 md:mb-6">
                      <button
                        className="bg-[#5D34F3] text-white py-2.5 px-6 font-medium text-base rounded-[20px]"
                        onClick={handleSubmit}
                      >
                        Upload Image
                      </button>
                      <span className="text-xs md:text-lg">
                        {" "}
                        AI prediction results
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 ">
                    <div className="bg-white rounded-lg">
                      <div className="flex items-center justify-center w-full mb-5">
                        <div className=" w-full h-[40vh] p-4">
                          {imagePreview && (
                            <img
                              src={imagePreview && imagePreview}
                              alt="preview"
                              className="w-full h-full"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full mb-5">
                        <input
                          id="dropzone-file"
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          name="image"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <label
                          htmlFor="dropzone-file"
                          className="text-[#1A73E8] flex items-center py-4 px-8 border border-[#DADCE0] "
                        >
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 12V3.85L4.9 6.45L3.5 5L8.5 0L13.5 5L12.1 6.45L9.5 3.85V12H7.5ZM2.5 16C1.95 16 1.47933 15.8043 1.088 15.413C0.696666 15.0217 0.500667 14.5507 0.5 14V11H2.5V14H14.5V11H16.5V14C16.5 14.55 16.3043 15.021 15.913 15.413C15.5217 15.805 15.0507 16.0007 14.5 16H2.5Z"
                              fill="#1A73E8"
                            />
                          </svg>
                          Add file
                        </label>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Harum accusamus omnis animi rem vel at provident. Nostrum
                      consequuntur facilis, sunt inventore incidunt possimus
                      voluptas, dolor, ullam consequatur placeat cupiditate
                      temporibus!
                    </div>
                  </div>
                  <div className="bg-[#5D34F3] rounded-2xl flex justify-between items-center p-3 md:p-8 my-4 md:my-7">
                    <div className="flex items-center gap-5">
                      <div>
                        <img src={Doctor} alt="doctor" />
                      </div>
                      <span className="text-2xl font-medium text-[#F2F5FF]">
                        Book a consultation
                      </span>
                    </div>
                    <div>
                      <div className="bg-white/20 py-2 px-2.5 rounded-lg">
                        <div className="bg-white flex items-center gap-4 py-2 px-6 rounded-lg">
                          <img src={Calender} alt="calender" />
                          <span>Check Calender</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-[30px] bg-[#E2E4F9] flex items-center justify-around p-1.5 md:w-3/5 mx-auto my-4 md:my-7">
                      <button className="bg-[#5D34F3] text-white py-2.5 px-6 font-medium text-base rounded-[20px]">
                        Heart
                      </button>
                      <span className="text-xs md:text-lg"> Brain</span>
                      <span className="text-xs md:text-lg"> Kidney</span>
                      <span className="text-xs md:text-lg"> Dental</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3">
                    <div className="md:col-span-2 bg-white"></div>
                    <div className="md:col-span-1 bg-white rounded-3xl p-5 md:p-8 h-96  flex flex-col justify-between ">
                      <div>
                        <p className="text-[#93939A] font-normal text-base md:text-lg">
                          {" "}
                          Blood Pressure
                        </p>
                        <p className="text-[#252539] font-semibold text-3xl">
                          130mm/hg
                        </p>
                      </div>
                      <div>
                        <p className="text-[#93939A] font-normal text-base md:text-lg">
                          {" "}
                          Pulse
                        </p>
                        <p className="text-[#252539] font-semibold text-3xl">
                          81 beats/min
                        </p>
                      </div>
                      <div>
                        <p className="text-[#93939A] font-normal text-base md:text-lg">
                          {" "}
                          Oxygen
                        </p>
                        <p className="text-[#252539] font-semibold text-3xl">
                          93%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <ChatComponent />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PatientsDashboard;
