// Sidebar.tsx

import React from "react";
//import { usePathname } from "next/navigation";
import Logo from "../../assests/authentication/logo.svg";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [active, setActive] = React.useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(!active);
    }
  };

  return (
    <nav className={"flex flex-col lg:flex-row gap-4 justify-between px-2  md:px-24 bg-[#FCFCF7]"}>
      <div className="flex justify-around items-center text-sm font-semibold gap-3 md:gap-12">
        <div>
          <Link to='/'>
          <img src={Logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" /></Link>
        </div>
        <span className="li text-xs md:text-sm ">
          <a onClick={() => scrollToSection("home")} href="#home">
            Home
          </a>
        </span>
        <span className="li active:border-b-white text-xs md:text-sm ">
          <a onClick={() => scrollToSection("features")} href="#features">
            Features
          </a>
        </span>

        <span className="li text-xs md:text-sm ">
          <a onClick={() => scrollToSection("tech-stack")} href="#acilities">
            AI-Chat
          </a>
        </span>
        <span className="li text-xs md:text-sm  tracking-tighter">
          <a onClick={() => scrollToSection("blog")} href="#contact-us">
            Contact Us
          </a>
        </span>
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
      <style jsx>{`
        .li {
          margin: auto;
          color: #201e1e;

          cursor: pointer;
        }
        .li::after {
          content: "";
          display: block;
          border-bottom: solid 3px #5d34f3;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
          color: #5d34f3;
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
