/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout(props) {
  const [isHamburger, setHamburger] = useState(false);

  function toggleHamburger() {
    setHamburger((isHamburger) => !isHamburger);
  }
  return (
    <div className="relative flex  bg-layoutBackground">
      
      <div className="h-fit max-h-screen min-w-[15%] hidden xl:block z-50 sticky top-0">
        <Sidebar/>
      </div>
      <div className={`flex-1 h-fit flex flex-col`}>
        <Header toggleHamburger={toggleHamburger} isHamburger={isHamburger} />
        {isHamburger ? (
          <div className=" bg-primary block xl:hidden absolute w-full top-[60px] z-10 h-screen max-h-screen ">
            <Sidebar toggleHamburger={toggleHamburger} />
          </div>
        ) : (
          <div className="w-full overflow-y-scroll no-scrollbar px-4 sm:pr-[65px] sm:pb-[162px] pb-[50px] h-screen mt-[60px] sm:mt-0">
            <div className="body-container transition-item active">{props.children}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
