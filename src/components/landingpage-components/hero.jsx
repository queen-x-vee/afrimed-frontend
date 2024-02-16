import React from "react";
import HeroImg from "../../assests/landingpage/hero.svg";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-10 md:px-28 md:py-16"
      id="home"
    >
      <div className=" mx-auto text-center px-4 md:px-16">
        <p className="font-bold text-3xl md:text-5xl">
          {" "}
          A world where
          <span className="font-normal text-[#5D34F3]"> healthcare</span> is not
          just a service but an experience
        </p>
        <p className="font-normal text-sm md:text-xl text-black/80 mt-2 md:mt-4">
          Our AI-powered doctor-patient consultation platform brings the
          expertise of medical professionals right to your fingertips,
          revolutionizing the way you access healthcare.
        </p>
      </div>
      <div className="my-5 md:my-10">
        <button className="text-xs font-bold py-3 px-6 ">Login</button>
        <button
          to="/signup"
          className="text-xs font-bold py-3 px-6 text-white bg-[#5D34F3] rounded-lg"
        >
          Sign up
        </button>
      </div>
      <div className="border-t-8 border-x-8 border-spacing-x-11 border-black my-10 md:my-16 rounded-t-xl">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
