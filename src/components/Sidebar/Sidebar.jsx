/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SidebarMenuOptions } from "./SidebarMenu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SidebarIcon from "./SidebarIcon";
import { setAccessToken } from "../../redux/action";

function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeHeader, setActiveHeader] = useState();
  const [width, setWidth] = useState(window.innerWidth);

  const handleLogout = () => {
    dispatch(setAccessToken(null));
    navigate("/login");
  };
  useEffect(() => {
    if (window.location.pathname.split("/")[1] === "") {
      setActiveHeader(() => "/manage");
    } else if (window.location.pathname.split("/")[1] === "calendar") {
      setActiveHeader(() => "/calendar");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  return (
    <div className="flex flex-col justify-between h-screen bg-primary pl-[20px] pr-[15px]  sm:pl-6 sm:pr-3">
      <div className="  h-screen sm:pt-[23px] pt-[13px] flex flex-col gap-8  pl-[20px] pr-[15px]  sm:pl-6 sm:pr-3 ">
        <div
          className="mx-5 cursor-pointer text-center hidden xl:block heading text-textDark"
          onClick={() => {
            navigate("/");
          }}
        >
          Planify
          <p className="text-center text-20-600 max-w-[200px] text-theme select-none">
            Seamless Planning, Achieve with Planify
          </p>
        </div>

        <ul className="flex flex-col gap-[9px]">
          {SidebarMenuOptions.map((sidebarOptions, i) => {
            return (
              <li key={i} className="cursor-pointer">
                <Link to={sidebarOptions.link}>
                  <div
                    className={`text-18-600 flex gap-6 items-center px-[15px] py-3 rounded-lg ${
                      activeHeader &&
                      sidebarOptions.route.includes(activeHeader)
                        ? " text-primary  bg-theme"
                        : " text-textDark"
                    }`}
                    onClick={() => {
                      isMobile && props.toggleHamburger();
                    }}
                  >
                    <SidebarIcon
                      option={sidebarOptions.option}
                      fill={
                        activeHeader &&
                        sidebarOptions.route.includes(activeHeader)
                          ? "#ffffff"
                          : "#000000"
                      }
                    />
                    <p>{sidebarOptions.option}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="text-primary border-2 bg-dangerTheme p-3 rounded-10 mb-10"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
}

export default Sidebar;
