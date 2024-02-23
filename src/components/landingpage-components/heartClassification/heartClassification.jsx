import React from "react";
import Footer from "../footer";
import { Link } from "react-router-dom";
import Logo from "../../../assests/authentication/logo.svg";
import Dropdown from "../../../assests/landingpage/dropdown.svg";

const HeartClassification = () => {
  return (
    <div className="w-full bg-[#FCFCF7] ">
      <nav
        className={
          "flex lg:flex-row items-center justify-between px-2  md:px-24"
        }
      >
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-3 md:gap-10">
          <Link
            to="/login"
            className="text-xs md:text-sm font-bold py-1 px-3 md:py-3 md:px-6 "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className=" text-xs md:text-sm font-bold py-1 px-3 md:py-3 md:px-6 text-white bg-[#5D34F3] rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <form className="mx-auto w-full md:w-3/5 ">
        <div className="font-bold text-[#1B1A1A] text-3xl md:text-4xl lg:text-5xl mb-6  mt-10 md:mb-10 md:mt-16">
          Fill the heart issue classification form
        </div>
        <div className="flex gap-8  ">
          <div className="left w-1/2">
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Age <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Check Pain Type <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl flex justify-between items-center">
                <select
                  name="chest_pain_type"
                  id="chest_pain_type"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                >
                  <option value="">Type</option>
                  <option value="0">typical angina</option>
                  <option value="1">atypical angina</option>
                  <option value="2">non-angina pain</option>
                  <option value="3">asymptomatic</option>
                </select>
              </div>
            </div>

            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Cholesterol <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Restecg - ECG <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
              <select
                  name="restecg"
                  id="restecg"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                >
                  <option value="">Type</option>
                  <option value="0">normal</option>
                  <option value="1">ST-T wave abnormality</option>
                  <option value="2">ventricular hypertrophy</option>
                  
                </select>
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Exercise-induced angina <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Oldpeak - ST depression <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Sex <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Resting Bp <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Fasting Blood Sugar <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Chest Pain Type <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Maximum heart rate achieved{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Slope <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
                  type="text"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 md:mb-7">
          <label className="font-semibold text-xl">
            Thalassemia <span className="text-red-500">*</span>
          </label>
          <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
            <input
              className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white"
              type="text"
              required
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="items-center justify-center flex flex-wrap">
          <button className="text-base md:text-xl font-bold py-3 px-6 md:py-7 md:px-20 text-white bg-[#5D34F3] rounded-lg mt-10 mb-16 md:mb-32">
            Get your classification
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default HeartClassification;
