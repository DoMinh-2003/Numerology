import React from "react";

function CardItem({ title, image, desc, subDesc, btn }) {
  return (
    <div className="sm:w-[379px] w-[290px] sm:h-[401px] h-[350px] rounded-[12px] border-[1px] text-white flex  flex-col items-center text-center bg-[rgba(255,255,255,0.2)]">
      <div className="card-image mt-4 sm:mb-7 mb-3">
        <img src={image} className="block w-[80px] h-[80px]" alt="" />
      </div>
      <div className="card-title">
        <h3 className=" font-bold sm:text-[24px] text-[20px] leading-[29.05px] sm:mb-5 mb-2">
          {title}
        </h3>
      </div>
      <div className="card-desc font-[300] w-[276px] text-[15px] leading-[24px] text-center sm:mb-5">
        <p>{desc}</p>
      </div>
      <div className="card-subDesc font-[300] text-[15px] leading-[24px] text-center mb-5">
        <p>{subDesc}</p>
      </div>
      <div
        className="card-btn sm:w-[327px] w-[250px] h-[85px] rounded-[6px] flex flex-col items-center justify-center"
        style={{ background: `${btn.background}` }}
      >
        <p className="text-orange-400">{btn.label}</p>
        <p className="text-black font-medium italic text-[15px] leading-[24px]">
          {btn.desc}
        </p>
      </div>
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
