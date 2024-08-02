import { useMediaQuery } from "react-responsive";
import home from "../../images/home.png";
import avatar from "../../images/avatar.png";
import disc from "../../images/disc.png";
import muslim from "../../images/muslim.png";
import background from "../../images/Subtract.png";
import bag from "../../images/bag.png";
const Navbar = () => {
  const isQuery = useMediaQuery({ query: "(max-width: 400px)" });
  return (
    <div
      className={`flex w-full justify-center bottom-5 items-center  ${
        isQuery ? "fixed" : "hidden"
      }`}
    >
      <div className="absolute flex justify-center items-center  inset-0 w-full h-40px">
        <img src={background} alt="" />
      </div>
      <div
        className={`w-full text-white size-[12px] leading-[14.52px]  items-center  flex justify-around z-10 px-3 py-4 `}
      >
        <div className="flex flex-col font-[500] items-center">
          <img src={home} className="mb-2" alt="" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center opacity-[70%]">
          <img src={muslim} className="mb-2" alt="" />
          <span>Thần Số</span>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <div className="absolute flex justify-center z-20 items-center -top-10 right-[7px]  bg-orange-500 p-4 rounded-full">
            <img src={bag} className="inline-block w-[20px] h-[20px]" alt="" />
          </div>
          <span className="mt-7 opacity-[70%]">Mua Gói</span>
        </div>
        <div className="flex flex-col items-center opacity-[70%]">
          <img src={disc} className="mb-2" alt="" />
          <span>DISC</span>
        </div>
        <div className="flex flex-col items-center opacity-[70%]">
          <img src={avatar} className="mb-2" alt="" />
          <span>Cá Nhân</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
