import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-[14.56rem] bg-[#5D34F3] flex flex-col items-center justify-center">
        <div>
          <p>Subscribe toAfriMed Newsletter</p>

          <div className="flex justify-between  bg-[#F6F6F6]/30 w-[32rem]">
            <input className="bg-transparent outline-none w-full px-3 placeholder:text-base placeholder:text-white" type="text" placeholder="Enter your email address"/>
            <button className="py-4 px-7 bg-[#2C1E60]">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="bg-[#221B3B]">

      </div>
    </div>
  );
};

export default Footer;
