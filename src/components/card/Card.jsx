import React from "react";

function CardItem({ title, image, desc, subDesc, btn }) {
  return (
    <div className="sm:w-[379px] w-[290px] sm:h-[401px] h-[350px] rounded-[12px] border-[rgba(155,152,152,0.8)] border-[1px] text-white flex  flex-col items-center text-center bg-[rgba(255,255,255,0.12)] backdrop-blur-md">
      <div className="card-image mt-4 sm:mb-7 mb-3">
        <img src={image} className="block w-[80px] h-[80px]" alt="" />
      </div>
      <div className="card-title">
        <h3 className=" font-bold sm:text-[24px] text-[20px] leading-[29.05px] sm:mb-5 mb-2">
          {title}
        </h3>
      </div>

      <div className="card-desc sm:font-[400] font-[200] sm:w-[290px] w-[270px] sm:text-[14px] text-[13px]  leading-[24px] text-center sm:mb-5">
        {desc()}
      </div>
      <div className="card-subDesc font-[400] text-[15px] leading-[24px] text-center mb-5">
        <p>{subDesc}</p>
      </div>
      <div>{btn()}</div>
    </div>
  );
}

function Card({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          desc={item.desc}
          subDesc={item.subDesc}
          image={item.image}
          btn={item.btn}
        />
      ))}
    </>
  );
}

export default Card;
