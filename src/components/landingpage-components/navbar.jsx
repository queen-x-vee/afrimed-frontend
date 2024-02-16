// Sidebar.tsx

import React from "react";
//import { usePathname } from "next/navigation";
import Logo from '../../assests/authentication/logo.svg'
import { Link } from "react-router-dom";

const MobileNavbar=() => {


  const [active, setActive] = React.useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(!active);
    }
  };
 


  return (
    <nav className={ "flex justify-between p-4 md:py-6 md:px-24"}>
      
      <div className="flex justify-around items-center text-sm font-semibold gap-6 md:gap-12">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <span className="li text-xs md:text-base -tracking-tighter">
          <a onClick={() => scrollToSection("about-me")} href='#home'>Home</a>
        </span>
        <span className="li active:border-b-white text-xs md:text-base tracking-tighter">
          <a onClick={() => scrollToSection("projects")} href='#services'>Services</a>
        </span>
       
        <span className="li text-xs md:text-base tracking-tighter">
          <a onClick={() => scrollToSection("tech-stack")} href='#acilities'>Facilities</a>
        </span>
        <span className="li text-xs md:text-base tracking-tighter">
          <a onClick={() => scrollToSection("blog")} href='#contact-us'>Contact Us</a>
        </span>
        
      </div>
      <div className="flex flex-row items-center gap-3 md:gap-10">
        <Link to="/login" className="text-xs font-bold py-3 px-6 ">Login</Link>
        <Link to="/signup" className="text-xs font-bold py-3 px-6 text-white bg-[#5D34F3] rounded-lg">Sign up</Link>
      </div>
      <style jsx>{`
        .li {
          margin: auto;
          color: #201E1E;
          
          cursor: pointer;
        }
        .li::after {
          content: "";
          display: block;
          border-bottom: solid 3px #5D34F3;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
          color: #5D34F3;
          font-weight: 700;
        }
        .li:hover:after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default MobileNavbar;