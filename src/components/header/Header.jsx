import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-screen h-[84px] flex justify-around items-center bg-[#1a133e]">
      <div className="header-logo">
        <img src={logo} className="block w-[281px] h-[37.7px]" alt="" />
      </div>
      <div className="header-wrapper flex items-center">
        <ul className="header-wrapper__items flex text-[#FFFFFF] text-[15px] leading-18.15 font-medium w-[230px] h-[11px] items-center justify-around">
          <li>
            {/* <Link to="/"> */}
            <div>Trang chủ</div>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/"> */}
            <div>Thần số</div>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/"> */}
            <div>DISC</div>
            {/* </Link> */}
          </li>
        </ul>
        <div className="header-wrapper__btns">
          <div className="header-wrapper__btns--buying flex justify-center items-center">
            <button className="px-2 py-1 rounded-lg text-[15px] font-semibold text-[#FFFFFF] bg-[#FB6514]">
              Mua gói
            </button>
            <button>Đăng nhập</button>
          </div>
          <div className="header-wrapper__btns--signIn"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
