/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Cross, Hamburger } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import { profileAPI } from "../../apis/Auth/AuthAPI";
import { useSelector } from "react-redux";

function Header(props) {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.accessToken.token);
  const [firstName, setFirstName] = useState("")

  useEffect(() => {
    async function fetchProfile(){
      const result = await profileAPI(accessToken)
      if(result?.status === 200){
        setFirstName(result?.data[0]?.name?.charAt(0)?.toUpperCase());
      }
    }
    fetchProfile()
  }, [accessToken])
  

  return (
    <>
      <nav className="z-50 xl:sticky h-[100px] fixed w-full top-0 pr-[67px] py-[21px] border-gray-200  bg-primary hidden xl:block">
        <div className="flex items-center justify-end">
          <div className="flex gap-[20px] items-center lg:order-2">
            <div
              className="rounded-lg cursor-pointer"
              // onClick={() => {
              //   navigate("/settings");
              // }}
            >
              <p
                className={`text-textDark bg-[#635fc7]/[0.75] w-[38px] h-[38px] text-center grid place-items-center rounded-[10px] text-20-400`}
              >
                {firstName}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="z-50 xl:sticky fixed w-full top-0 py-[8px] px-[16px]  bg-primary xl:hidden flex items-center justify-between">
        <div
          onClick={() => {
            props.toggleHamburger();
          }}
        >
          <>{props.isHamburger ? <Cross /> : <Hamburger />}</>
        </div>
        <div
          className="mx-5 cursor-pointer hidden sm:block heading "
          onClick={() => {
            navigate("/");
          }}
        >
          Planify
        </div>
        <div className="rounded-lg">
          <p
            className={`text-textDark  bg-[#635fc7]/[0.75] w-[38px] h-[38px] text-center grid place-items-center rounded-[10px] text-20-400`}
          >
            {firstName}
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
