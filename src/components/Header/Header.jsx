/* eslint-disable react/prop-types */
import {
  Cross,
  Hamburger,
  UnbundleLogo,
} from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();


  return (
    <>
      <nav className="z-50 sm:sticky fixed w-full top-0 pr-[67px] py-[21px] border-gray-200 dark:bg-primary bg-lightPrimary hidden sm:block">
        <div className="flex items-center justify-end">
          <div className="flex gap-[20px] items-center lg:order-2">
            <div
              className="rounded-lg cursor-pointer"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <p
                className={`text-textDark bg-textTertiary w-[38px] h-[38px] text-center grid place-items-center rounded-[10px] text-20-400`}
              >
                M
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="z-50 sm:sticky fixed w-full top-0 py-[8px] px-[16px] dark:bg-primary bg-lightPrimary sm:hidden flex items-center justify-between">
        <div
          onClick={() => {
            props.toggleHamburger();
          }}
        >
          
            <>{props.isHamburger ? <Cross /> : <Hamburger />}</>
         
        </div>
        <div
          className=""
          onClick={() => {
            navigate("/");
          }}
        >
          <UnbundleLogo />
        </div>
        <div
          className="rounded-lg"
        >
          <p
            className={`text-textDark  bg-textTertiary w-[38px] h-[38px] text-center grid place-items-center rounded-[10px] text-20-400`}
          >
            M
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
