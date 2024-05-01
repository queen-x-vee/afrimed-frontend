import React, { useEffect } from "react";
import Notifications from "../../assests/doctors-dashboard-assets/notificationbell.svg";
import Profile from "../../assests/doctors-dashboard-assets/doctorsprofilepic.svg";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/authStore";

const pageRoutes = [
  {
    label: "Dashboard",
    href: "/doctor",
  },
  {
    label: "Appointments",
    href: "/doctor-appointments",
  },
  {
    label: "Patients",
    href: "/doctor-patients",
  },
  {
    label: "Messages",
    href: "/doctor-messages",
  },
  {
    label: "Reports",
    href: "/doctor-ai",
  },
];

const TopNavbar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    useAuthStore.getState().logout();
    navigate("/");
  };

  // -------- Redirect user if logged in -----------------
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <nav>
        <div className=" md:hidden flex flex-row justify-between items-center p-4 bg-[#FFFFFF] mb-5 md:mb-10">
          {pageRoutes.map((route, index) => {
            return (
              <div className="flex flex-row items-center " key={index}>
                <NavLink
                  to={route.href}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-4 border-b-[#5D34F3] text-black text-xs py-2.5 px-2 flex flex-row items-center gap-x-3 tracking-tighter "
                      : "flex flex-row items-center gap-x-3 py-2.5 px-2 text-xs text-black tracking-tighter "
                  }
                >
                  {route.label}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="md:hidden flex items-center justify-end mr-2 mb-2">
          <button
            className="text-black text-xs p-2 border-2 border-[#5D34F3] rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-row justify-between items-center p-4 md:px-11 md:py-6 bg-[#FFFFFF] mb-5 md:mb-10">
        <div className="flex flex-col items-start">
          <span className="font-semibold text-lg md:text-2xl text-[#0D0D0F] mb-2">
            Welcome Dr {user?.first_name}
          </span>
          <span className="font-normal text-sm md:text-base text-[#0A9D4C]">
            Heart Specialist
          </span>
        </div>
        <div className="flex flex-row gap-x-10 items-center">
          <div className={`bg-[#D9D9D9] p-4 rounded-full`}>
            <img src={Notifications} alt={"notification"} />
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <div className="flex  justify-center items-center">
              <img
                src={user?.profile_pic ? user?.profile_pic : Profile}
                alt="profile"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-x-1">
              <span className="text-base  font-medium">{`${user?.first_name} ${user?.last_name}`}</span>
              <span className="text-xs md:text-sm text-[#000000]/70">
                {user?.age ? `${user?.age} years old` : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .li {
          margin: auto;
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
        }
        .li::after {
          content: "";
          display: block;
          border-bottom: solid 3px #ffffff;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }
        .li:hover:after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default TopNavbar;
