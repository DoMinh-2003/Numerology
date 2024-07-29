import { data } from "autoprefixer";
import image1 from "../../images/Group_1908.png";
import image2 from "../../images/Line_19.png";
import logo1 from "../../images/logo_1.png";
import logo2 from "../../images/logo_2.png";
import logo3 from "../../images/logo_3.png";
import logo4 from "../../images/logo_4.png";
import logo5 from "../../images/logo_5.png";
import logo6 from "../../images/logo_6.png";
import logo7 from "../../images/logo_7.png";
import logo8 from "../../images/logo_8.png";
import LogoFooter from "../logo_footer/LogoFooter";
function Footer() {
  const data = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  return (
    <footer className="w-full h-fit py-[40px] bg-[#120D2E]">
      <div className="max-w-[1270px] mx-auto">
        <div className="w-full h-fit">
          <img
            src={image1}
            className="block w-[1270px] h-[27.34px] mb-5"
            alt=""
          />
          <p className="text-white text-[16px] font-[400] leading-[19.36px] text-center mb-5">
            Thần Số Học chỉ là một công cụ để thấu hiểu thêm về bản thân, chỉ
            nên tham khảo, không nên mắc kẹt vào các con số!
          </p>
          <img src={image2} className="block w-[1200px] mb-5" alt="" />
        </div>
        <div className="flex justify-center gap-4 items-center flex-wrap">
          <LogoFooter data={data} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
