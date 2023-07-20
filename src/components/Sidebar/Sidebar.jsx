/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SidebarMenuOptions } from "./SidebarMenu";
import { Link, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
// import planify from "../../assets/Planify.svg"

function Sidebar(props) {
  const navigate = useNavigate();
  const [activeHeader, setActiveHeader] = useState("");

  useEffect(() => {
    setActiveHeader(window.location.pathname.split("/")[1]);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  return (
    <div className="dark:bg-primary bg-lightPrimary h-screen sm:pt-[23px] pt-[13px] flex flex-col gap-8  pl-[20px] pr-[15px]  sm:pl-6 sm:pr-3 ">
      <div
        className="mx-5 cursor-pointer text-center hidden sm:block heading text-textDark"
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
              <Link to={sidebarOptions.route}>
                {console.log(activeHeader)}
                <div
                  className={`text-18-600 flex gap-2 items-center px-[15px] py-3 rounded-lg ${
                    activeHeader === "" && sidebarOptions.route.includes("/")
                      ? "dark:text-textSecondary text-textPrimary dark:bg-secondary bg-theme"
                      : activeHeader &&
                        sidebarOptions.route.includes(activeHeader)
                      ? "dark:text-textSecondary text-textPrimary dark:bg-secondary bg-theme"
                      : "dark:text-textQuad text-textGreyLight"
                  }`}
                  onClick={() => {
                    isMobile && props.toggleHamburger();
                  }}
                >
                  <SidebarIcon
                    option={sidebarOptions.option}
                    fill={
                      activeHeader === "" && sidebarOptions.route.includes("/")
                        ? "#ffffff"
                        : activeHeader &&
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
  );
}

export default Sidebar;
