import React, { useState } from "react";
import Logo from "../assests/authentication/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setLoading(true);

    try {
      const res = await (
        await fetch(`https://api-afrimed.vercel.app/api/auth/otp/generate/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      ).json();

      if (!res.success) {
        throw res;
      }

      navigate("/verify");
      setLoading(false);
    } catch (error) {
      setMessage(Object.values(error)[0]);
      setMessageID("declineAlert");
      setShowMessage(true);
      setLoading(false);
    }
  };

  return (
    <div className=" w-full ">
      {/* ------ Alert Component ---------- */}
      {showMessage ? (
        <MessageAlert
          data={{ message, messageID }}
          onDurationChange={setTimeout(() => {
            setShowMessage(false);
          }, 2000)}
        />
      ) : (
        ""
      )}

      <div className=" background-image w-full  flex justify-center items-center  py-10 md:py-20">
        <div className="sub-text bg-white px-6 md:px-14 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl ">
          <div className=" mx-auto flex w-full max-w-md flex-col space-y-16 ">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={Logo} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-medium text-2xl text-[#272728]">
                <p>Welcome</p>
              </div>
              <div className="flex flex-row text-base font-normal text-[#575758]">
                <p>Sign in with your Afrimed account</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-10 mb-10">
                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Enter email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      type="password"
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Enter password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="font-normal text-xs text-[#FF2C2C]">
                      Forgot Password?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mb-10">
                  <button
                    type="submit"
                    className="flex items-center p-4 justify-center text-white text-xs w-full  rounded-xl bg-[#5D34F3]"
                  >
                    {loading ? <Loader /> : "Sign in"}
                  </button>

                  {/* <button className="flex items-center p-4 justify-center text-black text-xs w-full  rounded-xl border border-[#5D34F3]">
                    <Link to="/doctor">Sign in as a Doctor</Link>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
          <div className="font-normal text-xs">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-[#5D34F3]">
              {" "}
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
        }

        .background-image {
          background-image: url("https://s3-alpha-sig.figma.com/img/5054/a706/518845977b21323fbd5912b20fdd0307?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1DGWoPqzxbuA3BwZZJPKWnUbQobjuaciNLmm4z5TxzKxxHYujFJrLdl1Mzhwa8PCTFBJjotLZYsJVKbjTmz2hNiwcxo99gunv47DAsoE7kcGqkwr-2RlAIA6pG9QBg9DgciSdotizhDB2FhYiqE2LX~~wyD05QJOXnvPvgYTXhnhcQ5YtjFrEATqW09NSxTJ725e2Ki0zPx-Yl36x~GEYL59NIP06coIerAFZCI5H98JXRM8hCzkqQjADD82V~~GogyjY7iixbleQlsXY~gIXOq-yDn~oA9n9YO6gVex37SS3dl5Y9UFkbz7DBv1moXSX1cwEU0YDipIzZs1IE1uw__"); /* Replace 'path/to/your/image.jpg' with your image path */
          background-size: cover;
          background-position: center;
          width: 100%;
        }
        .background-image::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          inline-size: 100%;
          block-size: 100%;
          background-color: rgba(93, 52, 243, 0.08); /* Adjust opacity here */
        }

        /* Style for the text or content */
        .background-image h1,
        .background-image .left,
        .background-image .right,
        .background-image .sub-text {
          position: relative;
          z-index: 1; /* Ensure text appears above the overlay */
        }
      `}</style>
    </div>
  );
};

export default Login;
