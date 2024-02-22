import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assests/authentication/logo.svg";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
import useAuthStore from "../stores/authStore";

const Signup = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/patient");
    }
  }, []);

  // ------------- Reuseable Registration Function -------------------------
  const submitFormData = async (formData, endpoint, onSuccess, onError) => {
    try {
      if (
        formData.full_name === "" ||
        formData.email === "" ||
        formData.password === ""
      )
        throw { err: "Fields are required." };
      if (formData.password !== formData.re_password)
        throw { err: "Password does not match!" };

      const data = {
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        first_name: formData.full_name.split(" ")[0], // Extract first name
        last_name: formData.full_name.split(" ")[1], // Extract last name
      };

      const res = await (
        await fetch(`https://api-afrimed.vercel.app${endpoint}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();

      const resLength = Object.entries(res).length;
      if (resLength !== 4) {
        throw res;
      }

      onSuccess(res);
    } catch (error) {
      onError(error.err ? error.err : Object.values(error)[0][0]);
    }
  };

  // ------------- Register Patient -----------------------
  const handleRegisterPatient = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    submitFormData(
      formData,
      "/api/auth/users/",
      (res) => {
        navigate("/patient");
        login(res);
        setIsLoading(false);
      },
      (errorMessage) => {
        setMessage(errorMessage);
        setMessageID("declineAlert");
        setShowMessage(true);
        setIsLoading(false);
      }
    );
  };

  // ------------- Register Doctor -----------------------
  const handleRegisterDoctor = async (e) => {
    e.preventDefault();
    setLoading(true);

    submitFormData(
      formData,
      "/api/practitioners/signup/",
      (res) => {
        navigate("/doctor");
        login(res);
        setLoading(false);
      },
      (errorMessage) => {
        setMessage(errorMessage);
        setMessageID("declineAlert");
        setShowMessage(true);
        setLoading(false);
      }
    );
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

      <div className=" background-image w-full  flex justify-center items-center py-10 md:py-20">
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
                <p>Sign up for your Afrimed account</p>
              </div>
            </div>

            <div>
              <form>
                <div className="flex flex-col space-y-10 mb-10">
                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Enter full name"
                      id="fullName"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Enter email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Enter password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                    <input
                      className="bg-inherit w-11/12 border-none outline-none"
                      placeholder="Confirm password"
                      id="password"
                      name="re_password"
                      value={formData.re_password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" className="mr-2" required />
                    <span className="font-medium text-xs ">
                      Agree to the <span className="text-[#4E5AC3]">Terms</span>{" "}
                      and <span className="text-[#4E5AC3]">Conditions</span>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mb-10">
                  <button
                    onClick={handleRegisterPatient}
                    disabled={isLoading}
                    type="submit"
                    className="flex items-center p-4 justify-center text-white text-xs w-full  rounded-xl bg-[#5D34F3]"
                  >
                    {isLoading ? <Loader /> : "Sign up as a Patient"}
                  </button>
                  <button
                    onClick={handleRegisterDoctor}
                    disabled={loading}
                    type="submit"
                    className="flex items-center p-4 justify-center text-black text-xs w-full  rounded-xl border border-[#5D34F3]"
                  >
                    {loading ? <Loader /> : "Sign up as a Doctor"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
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
          background-color: rgba(93, 52, 243, 0.08);
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

export default Signup;
