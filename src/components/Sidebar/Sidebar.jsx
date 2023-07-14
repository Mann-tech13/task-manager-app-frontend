/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  UnbundleLogo,
} from "../../assets/icons/icons";
import { SidebarMenuOptions } from "./SidebarMenu";
import { Link, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

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
    <div className="dark:bg-primary bg-lightPrimary h-screen sm:pt-[23px] pt-[13px]  pl-[20px] pr-[15px]  sm:pl-[37px] sm:pr-[11px] ">
      <div
        className="ml-[21px] mb-[30px] cursor-pointer hidden sm:block"
        onClick={() => {
          navigate("/");
        }}
      >
        <UnbundleLogo />
      </div>

      <div className="flex items-center dark:bg-secondary bg-lightSecondary rounded-10 justify-between pb-[11px] pl-[21px] pt-[9px] pr-[17px] mb-[18px] sm:mb-[16px]">
        <div className="flex flex-col gap-1">
          <p className="text-14-500 dark:text-lightPrimary text-textDark">
            Mann
          </p>
          <p className="text-11-400 dark:text-textSecondary text-textDark">
            All Boards
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-[9px]">
        {SidebarMenuOptions.map((sidebarOptions, i) => {
          return  (
            <li key={i} className="cursor-pointer">
              <Link to={sidebarOptions.route}>
                <div
                  className={`text-18-600 flex gap-2 items-center px-[15px] py-3 rounded-lg ${
                    activeHeader && sidebarOptions.route.includes(activeHeader)
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
  );
}

export default Sidebar;
