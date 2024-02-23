import { useEffect, useState } from "react";
import Logo from "../assests/authentication/logo.svg";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
import { useLocation, useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.formData?.email;
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageID, setMessageID] = useState("");
  const [otp, setOtp] = useState({
    code: ["", "", "", ""],
  });

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, []);

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

  // ----------- Handle Verify OTP ---------------------
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await (
        await fetch(`https://api-afrimed.vercel.app/api/auth/otp/verify/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ otp: joinedOtp }),
        })
      ).json();

      if (!res.success) {
        throw res;
      }

      setLoading(false);

      console.log(res);
    } catch (error) {
      console.log(error);
      setMessage(Object.values(error)[0]);
      setMessageID("declineAlert");
      setShowMessage(true);
      setLoading(false);
    }
  };

  // ----------- Handle Request New OTP -----------------
  const handleResendOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await (
        await fetch(`https://api-afrimed.vercel.app/api/auth/otp/verify/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        })
      ).json();

      console.log(res);
      if (!res.success) {
        throw res;
      }

      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
      <div className=" background-image w-full h-screen flex justify-center items-center">
        <div className="sub-text bg-white px-6 md:px-20 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className=" mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={Logo} alt="logo" className="w-32" />
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-medium text-2xl text-[#272728]">
                  <p>Verify your account</p>
                </div>
                <div className="flex flex-row text-xs font-normal text-[#575758]">
                  <p>
                    An Authentication code has been sent to{" "}
                    <span className="text-[#5D34F3]">your email</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    {otp.code.map((value, index) => (
                      <input
                        className="w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-yellow-300 text-gray-500"
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
                        disabled={loading}
                        className="flex items-center p-4 justify-center text-white text-xs w-full  rounded-xl bg-[#5D34F3]"
                        type="submit"
                      >
                        {loading ? <Loader /> : "Submit"}
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p>{" "}
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                      {isLoading ? (
                        <span class="text-rose-600">Loading...</span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          className="flex flex-row items-center text-[#5D34F3]"
                        >
                          Resend
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
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
          color: white; /* Text color */
          width: 100%;
        }
        .background-image::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          inline-size: 100%;
          block-size: 100%;
          background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity here */
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

export default Verify;
