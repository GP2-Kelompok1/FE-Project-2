import React from "react";
import logoAltaWhite from "../assets/logoAltaWhite.png";
import { useNavigate } from "react-router-dom";
import { BiBarChartSquare } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsFillCalendarMinusFill } from "react-icons/bs";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="bg-alta-dark h-full">
      <div className="drawer drawer-mobile h-screen">
        <div className="drawer hidden lg:contents">
          <div className="bg-alta-dark">
            <div className="w-full flex justify-center pt-10 pb-12">
              <img src={logoAltaWhite} alt="Altera Academy Logo" />
            </div>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-10 w-80 bg-alta-dark text-white">
              <div className=" border-b-2">
                <li>
                  <a
                    className="p-5 pl-0"
                    onClick={() => navigate("/dashboard")}
                  >
                    <div className="basis-1/4">
                      <BiBarChartSquare size={28} />
                    </div>
                    <div className="basis-3/4">
                      <p>Dashboard</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className=" border-b-2">
                <li>
                  <a
                    className="p-5 pl-0 flex flex-row"
                    onClick={() => navigate("/mentee/list")}
                  >
                    <div className="basis-1/4">
                      <RiUserSettingsLine size={28} />
                    </div>
                    <div className="basis-3/4">
                      <p>Mentee</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className=" border-b-2">
                <li>
                  <a
                    className="p-5 pl-0 flex flex-row"
                    onClick={() => navigate("/user")}
                  >
                    <div className="basis-1/4">
                      <BiUserCircle size={28} />
                    </div>
                    <div className="basis-3/4">
                      <p>User</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className=" border-b-2">
                <li>
                  <a
                    className="p-5 pl-0 flex flex-row"
                    onClick={() => navigate("/class")}
                  >
                    <div className="basis-1/4">
                      <BsFillCalendarMinusFill size={28} />
                    </div>
                    <div className="basis-3/4">
                      <p>Class</p>
                    </div>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="btm-nav fixed lg:hidden z-10 overflow-hidden w-screen">
          <button onClick={() => navigate("/dashboard")}>
            <BiBarChartSquare size={21} />
          </button>
          <button onClick={() => navigate("/mentee/list")}>
            <RiUserSettingsLine size={20} />
          </button>
          <button onClick={() => navigate("/user")}>
            <BiUserCircle size={25} />
          </button>
          <button onClick={() => navigate("/class")}>
            <BsFillCalendarMinusFill size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
