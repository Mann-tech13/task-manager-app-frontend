/* eslint-disable react/prop-types */
import { Cross, Hamburger } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="z-50 xl:sticky h-[100px] fixed w-full top-0 pr-[67px] py-[21px] border-gray-200  bg-primary hidden xl:block">
        <div className="flex items-center justify-end">
          <div className="flex gap-[20px] items-center lg:order-2">
            <div
              className="rounded-lg cursor-pointer"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <p
                className={`text-textDark bg-[#635fc7]/[0.75] w-[38px] h-[38px] text-center grid place-items-center rounded-[10px] text-20-400`}
              >
                M
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
            M
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
