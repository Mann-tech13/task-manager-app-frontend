/* eslint-disable react/prop-types */
import { useState } from "react";
import SettingsSidebar from "../sideBar/SettingsSidebar";
import DeleteModal from "../../components/modal/DeleteModal";
import Header from "../header/Header";

function SettingsLayout(props) {
  const [isHamburger, setHamburger] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  function toggleHamburger() {
    setHamburger((isHamburger) => !isHamburger);
  }

  return (
    <div className="relative flex dark:bg-primary bg-lightPrimary">
      <div className="w-[19%] hidden xl:block max-h-screen sticky top-0 h-fit pl-[20px] pr-[15px] pt-[13px] xl:pl-[37px] xl:pr-[11px] xl:pt-[23px]">
        <SettingsSidebar showModal={setLogoutModal} />
      </div>
      <div className="xl:w-[81%] h-fit flex flex-col w-full">
        <Header toggleHamburger={toggleHamburger} isHamburger={isHamburger} />
        {isHamburger ? (
          <div className="dark:bg-primary bg-lightPrimary h-screen block xl:hidden absolute w-full top-[60px] z-10 max-h-screen pl-[20px] pr-[15px] pt-[13px] xl:pl-[37px] xl:pr-[11px] xl:pt-[23px]">
            <SettingsSidebar toggleHamburger={toggleHamburger} />
          </div>
        ) : (
          <div className="w-full overflow-y-scroll no-scrollbar px-4 xl:pr-[65px] xl:pb-[162px] pb-[50px] h-screen mt-[60px] xl:mt-0">
            <div className="body-container">{props.children}</div>
          </div>
        )}
      </div>
      {logoutModal && <DeleteModal showModal={setLogoutModal} />}
    </div>
  );
}

export default SettingsLayout;
