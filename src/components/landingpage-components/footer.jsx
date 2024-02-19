import React from "react";
import Logo from "../../assests/authentication/logo.svg";

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
      <div className="bg-[#221B3B] py-4 px-10 md:py-8 md:px-20  ">
       
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div>
          <img src={Logo} alt ='logo'/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col gap-3 text-white text-sm">
            <span className="font-bold">Services</span>
            <span className="font-normal">AI-Powered Chatbot (AI Medic)</span>
            <span className="font-normal">Virtual Consultations</span>
            <span className="font-normal">Appointment Management</span>
            <span className="font-normal">Secure Messaging</span>
          </div>
          <div className="flex flex-col gap-3 text-white text-sm">
            <span  className="font-bold">Legal</span>
            <span className="font-normal">Terms and conditions</span>
            <span className="font-normal">Privacy</span>
            <span className="font-normal">Support</span>
          </div>
          <div className="flex flex-col gap-3 text-white text-sm"> 
            <span  className="font-bold">Contact Us</span>
            <span className="font-normal">Email: afrimed@gmail.com</span>
            <span className="font-normal">Contact: 08000098967</span>
          </div>
        </div>
        </div>
       

        <hr className="border border-[#D9D9D9] mt-8 md:mt-10 mb-6" />
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
