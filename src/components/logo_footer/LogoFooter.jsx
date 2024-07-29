import React from "react";

function LogoFooter({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-[60px] sm:w-[132px] bg-white h-[40.47px] sm:h-[70.47px] rounded-[6px]"
        >
          <img
            src={item}
            alt=""
            className="block object-contain w-[40px] sm:w-auto"
          />
        </div>
      ))}
    </>
  );
}

export default LogoFooter;
