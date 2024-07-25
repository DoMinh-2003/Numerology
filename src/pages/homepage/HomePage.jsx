import Card from "../../components/card/Card";
import reasonImage1 from "../../images/reasonImage_1.png";
import "./index.css";
function HomePage() {
  const items = [
    {
      title: "Khởi đầu",
      desc: "Vạn vật là dạng sóng rung, tần số và năng lượng.",
      subDesc: "Sự có mặt - Thiếu - Kết hợp",
      image: reasonImage1,
      btn: {
        background: "#fff",
        label: "Sự kết hợp",
        desc: "Ngày sinh họ + Họ tên",
      },
    },
    {
      title: "Khởi đầu",
      desc: "Vạn vật là dạng sóng rung, tần số và năng lượng.",
      subDesc: "Sự có mặt - Thiếu - Kết hợp",
      image: reasonImage1,
      btn: {
        background: "#fff",
        label: "Sự kết hợp",
        desc: "Ngày sinh họ + Họ tên",
      },
    },
    {
      title: "Khởi đầu",
      desc: "Vạn vật là dạng sóng rung, tần số và năng lượng.",
      subDesc: "Sự có mặt - Thiếu - Kết hợp",
      image: reasonImage1,
      btn: {
        background: "#fff",
        label: "Sự kết hợp",
        desc: "Ngày sinh họ + Họ tên",
      },
    },
  ];
  return (
    <main id="homePage">
      <section className="homePage__reason w-full h-fit md:py-[80px] py-[40px]">
        <div className="homePage__reason__container mx-auto max-w-7xl ">
          <div className="homePage__reason--title font-semibold sm:text-[48px] sm:leading-[70px] text-center text-white mb-[30px] px-5 text-[33px] leading-[35px]  ">
            Thần số học là gì, để làm gì?
          </div>
          <div className="homePage__reason--desc font-bold sm:text-[18px] text-[14px]  sm:leading-[28px] text-center text-[#FB6514] mb-[10px] px-5">
            Tấm bản đồ - GPS (Góc nhìn của TSH)
          </div>
          <div className="homePage__reason--subdesc font-semibold sm:text-[16px] text-[14px]  leading-[28px] text-center text-white  sm:mb-[60px] mb-[30px] px-5">
            Khám phá: Ưu - Nhược,
            <span className="font-[400]">
              _xu hướng phát triển (đam mê, sở trường, sợi chỉ đỏ,...)
            </span>
          </div>
          <div className="homePage__reason--wrapper flex justify-center items-center flex-wrap gap-5">
            <Card items={items} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
