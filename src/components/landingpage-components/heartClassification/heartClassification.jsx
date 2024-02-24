import React, { useState } from "react";
import Footer from "../footer";
import { Link } from "react-router-dom";
import Logo from "../../../assests/authentication/logo.svg";
import Loader from "../../../components/Loader";
import MessageAlert from "../../../components/MessageAlert";

const HeartClassification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [formData, setFormData] = useState({
    age: null,
    sex: null,
    chest_pain_type: null,
    resting_bp: null,
    cholesterol: null,
    fasting_blood_sugar: null,
    restecg: null,
    max_hr: null,
    exang: null,
    oldpeak: null,
    slope: null,
    num_major_vessels: null,
    thalassemia: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await (
        await fetch(
          `https://api-afrimed.vercel.app/api/classification/heart_disease/`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )
      ).json();

      if (res.result) {
        setMessage(res.result);
        setMessageID("declineAlert");
        setShowMessage(true);
        setIsLoading(false);
      }

      setMessage(Object.values(res)[0]);
      setMessageID("declineAlert");
      setShowMessage(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setMessage();
      setMessageID("declineAlert");
      setShowMessage(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#FCFCF7] ">
      {/* ------ Alert Component ---------- */}
      {showMessage ? (
        <MessageAlert
          data={{ message, messageID }}
          onDurationChange={setTimeout(() => {
            setShowMessage(false);
          }, 5000)}
        />
      ) : (
        ""
      )}
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

      <form className="mx-auto w-full md:w-3/5 " onSubmit={handleSubmit}>
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
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Number of major vessels <span className="text-red-500">*</span>
              </label> <br />
              <span style={{ fontSize: "11px", color: "gray" }}>
                Must be between 0 to 3
              </span>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="num_major_vessels"
                  value={formData.num_major_vessels}
                  onChange={handleChange}
                />
              </div>
              
            </div>

            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Cholesterol <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="cholesterol"
                  value={formData.cholesterol}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Restecg - ECG <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <select
                  id="restecg"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="restecg"
                  value={formData.restecg}
                  onChange={handleChange}
                >
                  <option value="">-- select --</option>
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
                <select
                  id="restecg"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="exang"
                  value={formData.exang}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- select --</option>
                  <option value="0">Yes</option>
                  <option value="1">No</option>
                </select>
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Oldpeak - ST depression <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="oldpeak"
                  value={formData.oldpeak}
                  onChange={handleChange}
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
                <select
                  id="sex"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- select --</option>
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </select>
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Resting Bp <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="resting_bp"
                  value={formData.resting_bp}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Fasting Blood Sugar <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <select
                  id="chestPain"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="fasting_blood_sugar"
                  value={formData.fasting_blood_sugar}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- select --</option>
                  <option value="0">True</option>
                  <option value="1">False</option>
                </select>
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Chest Pain Type <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <select
                  id="chestPain"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="chest_pain_type"
                  value={formData.chest_pain_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- select --</option>
                  <option value="0">Typical Angina</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non Angina</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Maximum heart rate achieved{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <input
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  type="number"
                  required
                  name="max_hr"
                  value={formData.max_hr}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 md:mb-7">
              <label className="font-semibold text-xl">
                Slope <span className="text-red-500">*</span>
              </label>
              <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
                <select
                  id="slope"
                  className="bg-transparent outline-none w-full px-3 placeholder:text-base "
                  name="slope"
                  value={formData.slope}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- select --</option>
                  <option value="0">Unsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 md:mb-7">
          <label className="font-semibold text-xl">
            Thalassemia <span className="text-red-500">*</span>
          </label>
          <div className=" px-6 py-[1.25rem] bg-white border border-[#E7E7E7] rounded-2xl">
            <select
              id="thalassemia"
              className="bg-transparent outline-none w-full px-3 placeholder:text-base "
              name="thalassemia"
              value={formData.thalassemia}
              onChange={handleChange}
              required
            >
              <option value="">-- select --</option>
              <option value="0">Normal</option>
              <option value="1"> Fixed Defect</option>
              <option value="2">Reversable Defect</option>
            </select>
          </div>
        </div>

        <div className="items-center justify-center flex flex-wrap">
          <button
            type="submit"
            className="text-base md:text-xl font-bold py-3 px-6 md:py-7 md:px-20 text-white bg-[#5D34F3] rounded-lg mt-10 mb-16 md:mb-32"
          >
            {isLoading ? <Loader /> : "Get your classification"}
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default HeartClassification;
