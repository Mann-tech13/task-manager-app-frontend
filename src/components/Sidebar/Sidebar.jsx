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
    <div className="dark:bg-primary bg-lightPrimary h-screen xl:pt-[23px] pt-[13px] flex flex-col gap-8  pl-[20px] pr-[15px]  xl:pl-6 xl:pr-3 ">
      <div
        className="mx-5 mb-[30px] cursor-pointer hidden xl:block heading text-textDark"
        onClick={() => {
          navigate("/");
        }}
      >
        Planify
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
