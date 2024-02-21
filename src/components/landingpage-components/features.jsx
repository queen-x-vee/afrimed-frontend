import React from "react";
import One from "../../assests/landingpage/featureCardOne.svg";
import Two from "../../assests/landingpage/featureCardTwo.svg";
import Three from "../../assests/landingpage/featureCardThree.svg";
import Four from "../../assests/landingpage/featureCardFour.svg";

const servicesRoutes = [
  {
    src: One,
    title: "AI-Powered Chatbot",
    text: "Leverage AI chat to augment diagnostic capabilities, leading to quicker and more accurate assessments.",
  },
  {
    src: Two,
    title: "Video and Call Consultations ",
    text: "Benefit from the convenience of remote consultations without compromising the quality of medical care.",
  },
  {
    src: Three,
    title: "Secure Messaging",
    text: "Discuss non-urgent matter all within a private and secure messaging environment.",
  },
  {
    src: Four,
    title: "Electronic Health Record",
    text: "Doctors benefit from quick access to comprehensive patient data, allowing for more informed and personalized consultations.",
  },
];

const Features = () => {
  return (
    <section
      className="px-6 md:px-20 md:py-10 flex flex-col justify-center w-screen md:w-full bg-[#FCFCF7]"
      id="features"
    >
      <div className="text-center mb-10 mt-16">
        <p className="text-2xl font-normal text-[#696969]"> Key benefits of AriMed</p>
        <p className="text-[#020202] font-bold text-4xl">Features</p>
      </div>

      <div className=" pt-5 grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-5">
        {servicesRoutes.map((route, index) => {
          return (
            
              <div className="py-10 px-5 flex flex-col  hover:bg-[#5D34F3] hover:text-white bg-white rounded-lg " key={index}>
                <div className="w-12 h-12 bg-[#E4DDFD] flex justify-center items-center hover:bg-[#E4DDFD] mb-5">
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
  );
};

export default Features;
