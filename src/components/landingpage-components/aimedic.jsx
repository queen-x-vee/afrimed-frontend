import React from "react";
import AIMedic from "../../assests/landingpage/aimedicdoc.svg";
import Bulb from "../../assests/landingpage/bulb.svg";
import One from "../../assests/landingpage/bestdocone.svg";

const servicesRoutes = [
  {
    src: One,
    title: "AI-Powered Chatbot",
    text: "Leverage AI chat to augment diagnostic capabilities, leading to quicker and more accurate assessments.",
  },
  {
    src: One,
    title: "Video and Call Consultations ",
    text: "Benefit from the convenience of remote consultations without compromising the quality of medical care.",
  },
  {
    src: One,
    title: "Secure Messaging",
    text: "",
  },
  {
    src: One,
    title: "Electronic Health Record",
    text: "Doctors benefit from quick access to comprehensive patient data, allowing for more informed and personalized consultations.",
  },
];

const Medic = () => {
  return (
    <div className=" w-full relative flex flex-col justify-between items-center px-6 md:px-20 md:py-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[90vh]">
        <div>
          <div className="w-[22.5rem] absolute top-[5%] left-1/3 transform -translate-x-1/2 -translate-y-1">
            <img src={AIMedic} alt="AI-Medic" className="w-full h-full" />
          </div>
          <div className="w-[24rem] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 absolute top-1/4 left-14">
            <div className="flex items-center">
              <img src={Bulb} alt="bulb" />
              <span className="font-medium text-lg text-[#020202]">
                Get Tips About Your Health
              </span>
            </div>
            <p className="text-xs font-normal text-[#6B6666]">
              Make informed decisions about your health with the support of
              cutting-edge technology{" "}
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center"> 
          <div>
            Get quick responses from AI Medic, our <span>AI-Powered Chat</span>
          </div>
          <div>
            Seamlessly navigate consultations, access quick responses, and
            experience a revolutionary approach to healthcare.
          </div>
          <div className="flex items-center mt-10">
            <button
              to="/signup"
              className="text-xs font-bold py-3 px-6 md:py-4 md:px-12 text-white bg-[#5D34F3] rounded-lg"
            >
              Try it for free
            </button>
            <button
              to="/signup"
              className="text-xs font-bold py-3 px-6 md:py-4 md:px-12 text-[#5D34F3] border border-[#5D34F3] rounded-lg"
            >
              Try it for free
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="h-[15rem] bg-[#5D34F3] rotate-[-3.5deg] my-14 w-[150%] absolute -left-[19%]  flex justify-center items-center">
          <div className=" w-11/12 flex items-around justify-center ">
            <div className="flex flex-col mx-10">
              <span className="font-semibold text-3xl text-[#F8F8F8]">
                {" "}
                300+
              </span>
              <span className="text-[#F8F8F8] text-sm">
                {" "}
                Verified Specialist
              </span>
            </div>
            <div className="flex flex-col mx-10">
              <span className="font-semibold text-3xl text-[#F8F8F8]">
                {" "}
                1200+
              </span>
              <span className="text-[#F8F8F8] text-sm"> Happy Costumers</span>
            </div>
            <div className="flex flex-col mx-10">
              <span className="font-semibold text-3xl text-[#F8F8F8]">
                {" "}
                80%
              </span>
              <span className="text-[#F8F8F8] text-sm"> Happy Costumers</span>
            </div>
            <div className="flex flex-col mx-10">
              <span className="font-semibold text-3xl text-[#F8F8F8]">
                {" "}
                1500+
              </span>
              <span className="text-[#F8F8F8] text-sm">
                {" "}
                Online Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section
          className="px-6 md:px-20 md:py-10 mt-[20%] w-screen md:w-full bg-[#FCFCF7]"
        >
          <div className="text-center mb-10 mt-16">
            <p className="text-2xl font-normal text-[#696969]">
              {" "}
              Key benefits of AriMed
            </p>
          </div>

          <div className=" pt-5 grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-5">
            {servicesRoutes.map((route, index) => {
              return (
                <div
                  className="py-10 px-5 flex flex-col  hover:bg-[#5D34F3] hover:text-white bg-white rounded-lg "
                  key={index}
                >
                  <div className="w-[10.625rem] h-[13.118rem] bg-[#E4DDFD] flex justify-center items-center hover:bg-[#E4DDFD] mb-5">
                    <img src={route.src} alt="Careers" />
                  </div>
                  <p className="text-base leading-7 font-semibold  hover:text-white mb-6">
                    {route.title}
                  </p>
                  <p className="text-xs font-normal  hover:text-white">
                    {route.text}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="lg:mt-24 mt-14 opacity-10" />
        </section>
      </div>
    </div>
  );
};

export default Medic;
