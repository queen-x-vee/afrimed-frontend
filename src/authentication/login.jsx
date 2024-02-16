import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" w-full ">
    <div className=" background-image w-full h-screen flex justify-center items-center">
      <div className="sub-text bg-white px-6 md:px-14 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl ">
        <div className=" mx-auto flex w-full max-w-md flex-col space-y-16 ">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Welcome</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>
                Sign in with your Afrimed account
              </p>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-10 mb-10">
                <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                  <input
                    className="bg-inherit w-11/12 border-none outline-none"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="flex justify-between p-4 w-full  rounded-xl bg-gray-100">
                  <input
                    className="bg-inherit w-11/12 border-none outline-none"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                  />
                </div>
                <div>
                  <span>Forgot Password?</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mb-10">
              <div className="flex items-center p-4 justify-center text-white text-xs w-full  rounded-xl bg-[#5D34F3]">
                <button>Sign in as a Patient</button>
              </div>
              <div className="flex items-center p-4 justify-center text-white text-xs w-full  rounded-xl bg-[#5D34F3]">
                <button>Sign in as a Patient</button>
              </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <span>Already have an account?</span>
          <Link to="/signup">Login</Link>
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
  )
}

export default Login