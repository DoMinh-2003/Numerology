import React from "react";
import logoDestop from "../../images/logo.png";
import logoMobile from "../../images/Logo-nav.png";
import navbar from "../../images/navbar.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full lg:h-[84px] h-[56px] bg-[#1a133e] ">
      <div className="header-destop lg:flex hidden items-center w-full h-full ">
        <div className="header-logo w-1/2 pl-16">
          <img src={logoDestop} className="block w-[281px] h-[37.7px]" alt="" />
        </div>
        <div className="header-wrapper flex w-1/2 justify-center items-center">
          <ul className="header-wrapper__items flex justify-center items-stretch text-white font-[400] gap-4 mr-7">
            <li>
              <div>Trang chủ</div>
            </li>
            <li>
              <div>Thần số</div>
            </li>
            <li>
              <div>DISC</div>
            </li>
          </ul>
          <div className="header-wrapper__btns flex items-center gap-4">
            <div className="header-wrapper__btns--buying ">
              <button className="px-7 py-3 rounded-md text-[15px] font-semibold text-[#FFFFFF] bg-[#FB6514] leading-[18.15px]">
                Mua gói
              </button>
            </div>
            <div className="header-wrapper__btns--signIn">
              <button className="rounded-md px-7 py-3 text-[15px] font-medium text-[#FFFFFF] border-[1px] leading-[18.15px] border-[#FFFFFF]">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile lg:hidden flex items-center justify-center w-full h-full relative">
        <div className="navbar absolute left-5">
          <img src={navbar} className="block w-[22.4px] h-[11.43px]" alt="" />
        </div>
        <div className="header-logo w-auto">
          <img src={logoMobile} className="block w-[67.9px] h-[32px]" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
