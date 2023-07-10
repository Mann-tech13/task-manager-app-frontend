/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  DownArrowModal,
  UnbundleLogo,
} from "../../assets/icons/icons";
import { SidebarMenuOptions } from "./SidebarMenu";
import { Link, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

function Sidebar(props) {
  const navigate = useNavigate();
  const [activeHeader, setActiveHeader] = useState("");
  const [activeSubHeader, setActiveSubHeader] = useState("");
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    setActiveHeader(window.location.pathname.split("/")[1]);
    setActiveSubHeader(window.location.pathname.split("/")[2]);
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
    <div className="dark:bg-primary bg-lightPrimary">
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
            {adminName.toUpperCase()}
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
                  className={`text-16-500 flex gap-2 items-center px-[15px] py-2 rounded-lg ${
                    activeHeader && sidebarOptions.route.includes(activeHeader)
                      ? "dark:text-textSecondary text-textDark dark:bg-secondary bg-lightSecondary"
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
                        ? "#36B697"
                        : "#9B9B9B"
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
