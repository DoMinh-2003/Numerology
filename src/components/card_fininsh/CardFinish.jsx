import React from "react";
function Item({ contentsLeft, contentRight, number }) {
  return (
    <div className="relative gap-6 flex justify-center text-center items-center">
      <div className="rounded-[12px] sm:w-[175.59px] w-[135.59px] flex flex-col justify-center xs-max:text-13px items-center flex-wrap text-white h-[86.93px] bg-[rgba(255,255,255,0.2)]">
        {contentsLeft()}
      </div>
      <div className="font-lobster-two absolute sm:w-[62.59px] w-[52.59px] h-[52.59px] text-[30px] sm:h-[62.59px] rounded-[50%] bg-white flex justify-center items-center font-[700] leading-[37.5px]">
        {number}
      </div>
      <div className="rounded-[12px] sm:w-[175.59px] w-[135.59px] flex-wrap flex-col xs-max:text-13px flex justify-center items-center text-white h-[86.93px] bg-[rgba(255,145,146,0.12)] ">
        {contentRight()}
      </div>
    </div>
  );
}
function CardFinish({ data, startIndex }) {
  return (
    <>
      {data.map((item, index) => (
        <Item
          key={startIndex + index}
          contentsLeft={item.contentLeft}
          contentRight={item.contentRight}
          number={startIndex + index + 1 === 10 ? 0 : startIndex + index + 1}
        />
      ))}
    </>
  );
}

export default CardFinish;
