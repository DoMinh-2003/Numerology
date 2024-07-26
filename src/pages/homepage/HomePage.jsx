import Card from "../../components/card/Card";
import reasonImage1 from "../../images/reasonImage_1.png";
import reasonImage2 from "../../images/reasonImage_2.png";
import reasonImage3 from "../../images/reasonImage_3.png";
import image1 from "../../images/image_2.png";
import arrow from "../../images/arrow.png";
import vector from "../../images/vector.png";
import arrow2 from "../../images/arrow2.png";
import frame from "../../images/Frame_8.png";
import other1 from "../../images/other1.png";
import other2 from "../../images/other2.png";
import imageCharacteristic from "../../images/characteristic_image.png";
import imageCharacteristic2 from "../../images/characteristic_image2.png";
import "./index.css";

function HomePage() {
  const items = [
    {
      title: "Khởi đầu",
      desc: () => {
        return (
          <p>
            <b>Vạn vật</b> là dạng sóng rung, tần số và năng lượng.
          </p>
        );
      },
      subDesc: "Sự có mặt - Thiếu - Kết hợp",
      image: reasonImage1,
      btn: () => {
        return (
          <div className="card-btn sm:w-[327px] w-[250px] h-[85px] rounded-[6px] flex flex-col items-center justify-center bg-white">
            <p className="text-orange-400">Sự kết hợp</p>
            <p className="text-black font-[600] text-[15px] leading-[24px]">
              Ngày sinh + Họ tên
            </p>
          </div>
        );
      },
    },
    {
      title: "Nhận biết",
      desc: () => {
        return (
          <p>
            <b>Hiểu mình</b>, hiểu người
            <br />
            Trở thành <b>phiên bản tốt nhất</b> của chính mình
          </p>
        );
      },
      subDesc: "Vượt thoát chính mình",
      image: reasonImage2,
      btn: () => {
        return (
          <div className="card-btn sm:w-[327px] w-[250px] h-[85px] rounded-[6px] flex flex-col items-center justify-center bg-white">
            <p className="text-orange-400">Trưởng thành từ bên trong</p>
            <p className="text-black font-[600] text-[15px] leading-[24px]">
              Sống có giá trị - Ý nghĩa
            </p>
          </div>
        );
      },
    },
    {
      title: "Nhìn thấu",
      desc: () => {
        return (
          <p className="flex items-center flex-col">
            <b>Để biết + Kinh nghiệm + sử dụng</b>
            <img
              className="block w-[16px] h-[14.22px] mt-0 sm:mt-2"
              src={arrow}
              alt=""
            />
            <b>Không dính mắc + Chối bỏ</b>
          </p>
        );
      },
      subDesc: (
        <img
          className="block w-[16px] h-[14.22px] mt-0 sm:-mt-3"
          src={arrow}
          alt=""
        />
      ),
      image: reasonImage3,
      btn: () => {
        return (
          <div className="card-btn sm:w-[327px] w-[250px] h-[85px] rounded-[6px] flex flex-col items-center justify-center bg-[#FB6514]">
            <p className="text-white font-[700] text-[20px] leading-[24px]">
              Vượt thoát
            </p>
          </div>
        );
      },
    },
  ];
  return (
    <main id="homePage">
      <section className="homePage__reason section ">
        <div className="homePage__reason__container section-container ">
          <div className="homePage__reason--title font-semibold size-label text-white">
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
      <section className="homePage__form section">
        <div className="homePage__form__container section-container "></div>
      </section>
      <section className="homePage__pythagore section bg-[#F9F9F9]">
        <div className="homePage__pythagore__container section-container">
          <div className="homePage__pythagore--title w-full flex items-center gap-7 justify-center">
            <img
              src={other1}
              className="hidden lg:inline-block w-[481.28px] h-[11.31px] mr-2"
              alt=""
            />
            <h1 className="size-label  font-[700] text-center">Pythagore</h1>
            <img
              src={other2}
              className="hidden lg:inline-block w-[481.28px] h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homePage__pythagore--desc text-[18px] leading-[21.78px] mb-[30px] xl:mb-[60px] font-[500] text-center text-[#FB6514]">
            <p>Nhà khoa học, toán học, triết học, nhà giáo dục, nhà tâm linh</p>
          </div>
          <div className="homePage__pythagore--wrapper w-full flex justify-center xl:justify-between items-start flex-wrap xl:gap-0 gap-7">
            <div className="box-contents w-full xl:w-[425px] h-fit">
              <h1 className="size-title font-[700] sm:mb-5 mb-3">
                Tư tưởng của Pythagore
              </h1>
              <div className="box-desc size-pra font-[400]">
                <p>
                  <b>Pythagore</b> xuất phát từ khoa học Ai Cập Cổ Đại, là trung
                  tâm giáo dục của Atlantic cực kỳ phát triển thời xưa
                </p>
                <p>
                  Ông cho rằng:
                  <b>
                    Linh hồn con người là bất từ, chúng ta sống để học bài học
                    trưởng thành của linh hồn
                  </b>
                  , bằng việc sử dụng các mã số học, ông có thể phân loại những
                  dạng năng lượng nghiệp lực khác nhau của từng linh hồn.
                </p>
                <p>
                  <b>Rung động của từng linh hồn</b> được đại diện và kết hợp
                  bởi rung động năng lượng riêng của từng thần số từ 1 đến 9 và
                  những kết hợp đa dạng của nó.
                </p>
              </div>
            </div>
            <div className="box-img">
              <img
                src={image1}
                className="block w-[211px] h-[239px] border-[8px] border-white xl:mt-3"
                alt=""
              />
            </div>
            <div className="box-contents w-full xl:w-[429.01px] h-fit">
              <h1 className="size-title font-[700] sm:mb-5 mb-3">
                Mục đích sau cùng
              </h1>
              <div className="box-desc size-pra font-[400]">
                <b>Xác định con người có thể phát triển theo ba cách</b>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  <b>Đối thoại với thượng đế:</b> Tránh xa các việc ác, noi
                  gương các bật Thánh, tập sống trong công hạnh các ngài.
                </p>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  Bằng tài năng (trí tuệ), đó là đức tính của <b>Thánh nhân.</b>
                </p>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  Bằng niềm khát khao cho sự
                  <b>thoát ly thanh thản nhẹ nhàng linh hồn ra khỏi thể xác</b>,
                  như là kết qủa từ rèn luyện để thăng hoa linh hồn...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__characteristic section bg-custom-pattern">
        <div className="homepage__characteristic__container section-container">
          <div className="homepage__characteristic--title"></div>
          <div className="box-contents"></div>
          <div className="box-image rounded-[12px] w-fit px-[30px] py-[50px] border-[1px] bg-[rgba(255,255,255,0.2)]">
            <img
              src={imageCharacteristic}
              alt=""
              className="block w-[535px] h-[334px] xl:mt-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
