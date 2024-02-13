import Logo from "../../assets/logo.png";
import { useState } from "react";
//import {Link } from "react-router-dom"
//import Dialog from '../../components/Dialog'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const history = useNavigate();

  const [otp, setOtp] = useState({
    code: ["", "", "", ""],
  });

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setOtp((prevOtp) => ({
      code: [...prevOtp.code.map((d, idx) => (idx === index ? value : d))],
    }));
    if (event.target.nextSibling) {
      event.target.nextSibling.focus();
    }
  };
  const joinedOtp = otp.code.join("");
  //console.log(joinedOtp)

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(joinedOtp);
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <img src={Logo} alt="Logo" className="" />
            <div className="font-semibold text-3xl">
              <p>Verify OTP</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>
                Kindly Input the 4-digit verification code sent to your email or
                phone number
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} action="" method="post">
              <div className="flex flex-col space-y-16">

                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.code.map((value, index) => (
                    <input
                      className="w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300"
                      type="text"
                      name="code"
                      id=""
                      maxLength="1"
                      key={index}
                      value={value}
                      onChange={(event) => handleInputChange(event, index)}
                      //onSelect={handleInputChange}
                      onFocus={(e) => e.target.select()}
                    />
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      onClick={() =>
                        alert("Enterd OTP is " + otp.code.join(""))
                      }
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-yellow-300 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-yellow-300"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
