// Sidebar.tsx

import React from "react";
//import { usePathname } from "next/navigation";
import Logo from '../../assests/authentication/logo.svg'
import { Link } from "react-router-dom";

const MobileNavbar=() => {

    const [color, setColor] = React.useState(false)
    function changeColor(){
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    React.useEffect(
        ()=>{
            window.addEventListener('scroll', changeColor)
        }
    )


  const [active, setActive] = React.useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(!active);
    }
  };
 


  return (
    <nav className={ "flex justify-between py-6 px-24"}>
      
      <div className="flex justify-around items-center text-sm font-semibold gap-12">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <span className="li">
          <a onClick={() => scrollToSection("about-me")} href='#home'>Home</a>
        </span>
        <span className="li active:border-b-white">
          <a onClick={() => scrollToSection("projects")} href='#services'>Services</a>
        </span>
       
        <span className="li">
          <a onClick={() => scrollToSection("tech-stack")} href='#acilities'>Facilities</a>
        </span>
        <span className="li">
          <a onClick={() => scrollToSection("blog")} href='#contact-us'>Contact Us</a>
        </span>
        
      </div>
      <div className="flex flex-row items-center gap-10">
        <Link to="/login" className="text-xs font-bold py-3 px-6 ">Login</Link>
        <Link to="/signup" className="text-xs font-bold py-3 px-6 text-white bg-[#5D34F3] rounded-lg">Sign up</Link>
      </div>
      <style jsx>{`
        .li {
          margin: auto;
          color: #201E1E;
          font-size: 14px;
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