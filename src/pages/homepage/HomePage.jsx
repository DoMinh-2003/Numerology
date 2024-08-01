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
import object1 from "../../images/object_1.png";
import object2 from "../../images/object_2.png";
import object3 from "../../images/object_4.png";
import object4 from "../../images/object_3.png";
import image from "../../images/image_41.png";
import "./index.css";
import Table from "../../components/table/Table";
import CardFinish from "../../components/card_fininsh/CardFinish";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { CiSearch } from "react-icons/ci";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const isQuery = useMediaQuery({ query: "(max-width: 400px)" });
  const isQueryTable = useMediaQuery({ query: "(max-width: 755px)" });
  const isQueryTablePhone = useMediaQuery({ query: "(max-width: 373px)" });
  const items = [
    {
      title: "Khởi đầu",
      desc: () => {
        return (
          <p className="font-[400]">
            <b className="font-[600]">Vạn vật</b> là dạng sóng rung, tần số và
            năng lượng.
          </p>
        );
      },
      subDesc: "Sự có mặt - Thiếu - Kết hợp",
      image: reasonImage1,
      btn: () => {
        return (
          <div className="card-btn sm:w-[327px] w-[250px] h-[85px] leading-[30px] rounded-[6px] flex flex-col items-center justify-center bg-white">
            <p className="text-orange-400 font-[500] text-[15px] italic">
              Sự kết hợp
            </p>
            <p className="text-black font-[600] text-[20px]">
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
          <p className="size-pra font-[400]">
            <b className="font-[600] ">Hiểu mình</b>, hiểu người
            <br />
            Trở thành <b className="font-[600]">phiên bản tốt nhất</b> của chính
            mình
          </p>
        );
      },
      subDesc: "Vượt thoát chính mình",
      image: reasonImage2,
      btn: () => {
        return (
          <div className="card-btn sm:w-[327px] w-[250px] h-[85px] leading-[30px]  rounded-[6px] flex flex-col items-center justify-center bg-white">
            <p className="text-orange-400 font-[500] text-[15px] italic">
              Trưởng thành từ bên trong
            </p>
            <p className="text-black font-[600] text-[20px] ">
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
            <b className="font-[600]">Để biết + Kinh nghiệm + sử dụng</b>
            <img
              className="block w-[16px] h-[14.22px] mt-0 sm:mt-2"
              src={arrow}
              alt=""
            />
            <b className="font-[600]">Không dính mắc + Chối bỏ</b>
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
  const data = [
    {
      dataSource: {
        1: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            Trí
          </div>
        ),
        2: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            3
          </div>
        ),
        3: () => (
          <div className="px-3 py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px]  flex justify-center items-center">
            6
          </div>
        ),
        4: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 md:border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            9
          </div>
        ),
        5: () => (
          <div className="flex items-center justify-center ml-[30px] mr-[10px] xl:mr-[100px]">
            <span className=" px-2 py-2  bg-[#C2E3F9] text-center rounded-[6px] mr-2">
              30
            </span>
            <span className=" px-2 py-2  bg-[#C2E3F9] text-center rounded-[6px] mr-2">
              33
            </span>
            <img
              src={object1}
              className="inline-block w-[32px] h-[17.72px] mr-2"
              alt=""
            />
            <p className="size-pra font-[600]  ">
              Học hỏi, tư duy, sáng tạo, triết lý
            </p>
          </div>
        ),
      },
      backgroundColor: "#f0f9ff",
    },
    {
      dataSource: {
        1: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            Tâm
          </div>
        ),
        2: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            2
          </div>
        ),
        3: () => (
          <div className="px-3 py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px]  flex justify-center items-center">
            5
          </div>
        ),
        4: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 md:border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            8
          </div>
        ),
        5: () => (
          <div className="flex items-center justify-center ml-[30px] mr-[10px] xl:mr-[100px]">
            <span className=" px-2 py-2  bg-[#ffe4b3] text-center rounded-[6px]  mr-2">
              20
            </span>
            <span className=" px-2 py-2  bg-[#ffe4b3] text-center rounded-[6px] mr-2">
              11
            </span>
            <img
              src={object2}
              className="inline-block w-[32px] h-[17.72px] mr-2"
              alt=""
            />
            <p className="size-pra font-[600]">
              Cảm xúc, tình cảm
              <img
                src={object4}
                className="mx-2 inline-block w-[16px] h-[16.02px] mr-2"
                alt=""
              />
              <span className="font-[700]">EQ</span>
            </p>
          </div>
        ),
      },
      backgroundColor: "#fff8eb",
    },
    {
      dataSource: {
        1: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            Thân
          </div>
        ),
        2: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            1
          </div>
        ),
        3: () => (
          <div className="px-3 py-4 border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px]  flex justify-center items-center">
            4
          </div>
        ),
        4: () => (
          <div
            className={`${
              isQueryTablePhone
                ? "w-[72px]"
                : isQueryTable
                ? "w-[90px]"
                : "px-3"
            } py-4 md:border-r border-[rgba(155,152,152,0.8)] w-[70px] text-[20px] font-[600] leading-[29.05px] flex justify-center items-center`}
          >
            7
          </div>
        ),
        5: () => (
          <div className="flex items-center justify-start  ml-[30px] mr-[10px] xl:mr-[100px]">
            <span className=" px-2 py-2 bg-[#ffc9c9] text-center rounded-[6px] mr-2">
              10
            </span>
            <span className=" px-2 py-2  bg-[#ffc9c9] text-center rounded-[6px] mr-2">
              22
            </span>
            <img
              src={object3}
              className="inline-block w-[32px] h-[17.72px] mr-2"
              alt=""
            />
            <p className="size-pra font-[600]">
              Học hỏi, tư duy, sáng tạo, triết lý
            </p>
          </div>
        ),
      },
      backgroundColor: "#ffecec",
    },
  ];
  const dataFinish = [
    {
      contentLeft: () => {
        return (
          <>
            <p>Độc lập</p>
            <p>Bản lĩnh</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Ích kỷ</div>
            <div>Cái tôi lớn</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>An nhiên</p>
            <p>Vị tha</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Thất thường</div>
            <div>Lệ thuộc</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Học sâu</p>
            <p>Tài năng</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Học cạn</div>
            <div>khoe mẽ</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Thực tế</p>
            <p>Sắp xếp</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Thực dụng</div>
            <div>Ngoan cố</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Kết nối từ tâm</p>
            <p>Tự do loan toả</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Kết nối toan tính</div>
            <div>Tự do quá đà</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Sáng tạo</p>
            <p>yêu thưong</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Tối tạo</div>
            <div>Dính mắc</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Sâu sắc, triết lý</p>
            <p>Vượt khó khổ</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Lý thuyết suông</div>
            <div>Chìm đắm</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Uy quyền</p>
            <p>Chuyên gia về tâm</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Kiểm soát</div>
            <div>Chuyên gia tiền</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Cộng đồng</p>
            <p>Lý tưởng</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Nhụt chí</div>
            <div>Ảo tưởng</div>
          </>
        );
      },
    },
    {
      contentLeft: () => {
        return (
          <>
            <p>Bật thầy đạo lý</p>
            <p>Chia sẻ cống hiến</p>
          </>
        );
      },
      contentRight: () => {
        return (
          <>
            <div>Hoang mang</div>
            <div>Thu mình lại</div>
          </>
        );
      },
    },
  ];
  const customSelectStyle = {
    position: "relative",
  };

  const selectStyle = {
    paddingLeft: "20px",
    height: "48px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "6px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  };

  const arrowStyle = {
    content: "''",
    fontSize: "16px",
    color: "black",
    position: "absolute",
    right: "10px",
    top: "50%",
    pointerEvents: "none",
  };
  return (
    <main id="homePage">
      <section className="homePage__reason section bg-custom-pattern ">
        <div className="homePage__reason__container section-container ">
          <div className="homePage__reason--title font-semibold size-label text-white">
            Thần số học là gì, để làm gì?
          </div>
          <div className="homePage__reason--desc font-bold sm:text-[18px] text-[14px]  sm:leading-[28px] text-center text-[#FB6514] mb-[10px] px-5">
            Tấm bản đồ - GPS (Góc nhìn của TSH)
          </div>
          <div className="homePage__reason--subdesc sm:text-[16px] text-[16px] font-[600] opacity-[80%] leading-[28px] text-center text-white  sm:mb-[60px] mb-[20px] px-5">
            Khám phá: Ưu - Nhược
            <span className="font-[400]">
              , xu hướng phát triển (đam mê, sở trường, sợi chỉ đỏ,...)
            </span>
          </div>
          <div className="homePage__reason--wrapper flex justify-center items-center flex-wrap gap-5">
            <Card items={items} />
          </div>
        </div>
      </section>
      <section className="homePage__form relative section bg-custom-pattern">
        <div className="homePage__form__container section-container flex-col flex justify-center items-center  ">
          <div className="homePage__form--title w-full flex items-center gap-7 mb-5 justify-center">
            <img
              src={other1}
              className="hidden xl:inline-block w-auto h-[11.31px] mr-2"
              alt=""
            />
            <h1 className="text-white  xl:text-[36px] text-[25px] font-[700] text-center">
              Xem thần số học online
            </h1>
            <img
              src={other2}
              className="hidden xl:inline-block w-auto h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homePage__finish--desc text-[18x] leading-[21.78px] mb-[30px] xl:mb-[60px] font-[600] text-center text-[#FB6514]">
            <p>
              Nhập tên và ngày sinh của bạn để luận giải sự nghiệp, vận mệnh,
              <p className="inline-block sm:block">
                tài năng, dự báo tương lai
              </p>
            </p>
          </div>
          <div className="max-w-[804px] rounded-[5px] h-fit px-[20px] sm:px-[50px] gap-3 py-[10px] sm:py-[50px] border-[rgba(155,152,152,0.8)] border-[1px] bg-[rgba(255,255,255,0.12)] backdrop-blur-md ">
            <form className="gap-3 w-full flex justify-center items-center flex-wrap mb-[20px]">
              <div className="lg:w-[344px] w-full h-fit">
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-[rgba(255,255,255,1)] font-[600] text-[16px]"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="VD Nguyễn Văn A"
                  className="pl-[20px] pr-2 h-[48px] w-full bg-white rounded-[6px]"
                />
              </div>
              <div className="lg:w-[344px] w-full h-fit">
                <label
                  htmlFor="date"
                  className="block mb-2 text-[rgba(255,255,255,1)] font-[600] text-[16px]"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="date"
                  className="pl-[20px] pr-2 h-[48px] w-full bg-white rounded-[6px]"
                />
              </div>
              <div className="lg:w-[344px] w-full h-fit">
                <label
                  htmlFor="authorname"
                  className="block mb-2 text-[rgba(255,255,255,1)] font-[600] text-[16px]"
                >
                  Tên tác ý
                </label>
                <input
                  type="text"
                  name="authorname"
                  placeholder="VD Nguyễn Văn A"
                  className="pl-[20px] pr-2 h-[48px] w-full bg-white rounded-[6px]"
                />
              </div>
              <div
                style={customSelectStyle}
                className=" lg:w-[344px] w-full h-fit"
              >
                <label
                  htmlFor="set"
                  className="block mb-2 text-[rgba(255,255,255,1)]  font-[600] text-[16px]"
                >
                  Giới tính
                </label>
                <select
                  placeholder="Giới tính"
                  className="pl-[20px] pr-2 h-[48px] w-full bg-white rounded-[6px]"
                  name="set"
                  style={selectStyle}
                >
                  <option>Giới tính</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
                <span style={arrowStyle}>▼</span>
              </div>
              <button className="flex justify-center items-center gap-4 bg-[#FB6514] w-full size-title font-[700] text-white h-[48px] rounded-[6px] mt-5">
                <CiSearch color="#fff" />
                Tra cứu ngay
              </button>
            </form>
            <div>
              <h1 className="text-[14px] font-[600] text-white leading-[24px]">
                Chú thích:
              </h1>
              <p className="opacity-[80%] text-[14px] font-[400] leading-[24px] text-white">
                Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai
                sinh…) của bạn khác với ngày sinh dương lịch thật thì cuộc đời
                bạn sẽ có sự xáo trộn từ cả 2 ngày sinh này. Bạn nên tra cứu cả
                2 để biết thêm chi tiết, tuy nhiên kết quả sẽ thiên về ngày sinh
                dương lịch thật!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__pythagore section   bg-[#F9F9F9]">
        <div className="homePage__pythagore__container overflow-hidden section-container">
          <div className="homePage__pythagore--title w-full mb-5 flex items-center  justify-center">
            <img
              src={other1}
              className="inline-block w-fit h-[11.31px] mr-2"
              alt=""
            />
            <h1 className="size-label-h1 px-[10px] font-[700] text-center">
              Pythagore
            </h1>
            <img
              src={other2}
              className="inline-block w-fit h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homePage__pythagore--desc text-[18px] leading-[21.78px] opacity-[70%] mb-[30px] xl:mb-[60px] font-[500] text-center text-[#FB6514]">
            <p>Nhà khoa học, toán học, triết học, nhà giáo dục, nhà tâm linh</p>
          </div>
          <div className="homePage__pythagore--wrapper w-full flex justify-start xl:justify-center items-start flex-wrap xl:gap-0 gap-3">
            <div className="flex justify-center gap-3 xl:gap-[100px] flex-wrap-reverse xl:mr-[80px]">
              <div className="box-contents w-full xl:w-[425px] h-fit">
                <h1 className="size-title font-[700] sm:mb-5 mb-3">
                  Tư tưởng của Pythagore
                </h1>
                <div className="box-desc size-pra font-[400] text-[15px]">
                  <p>
                    <b className="font-[700] text-[15px]">Pythagore</b> xuất
                    phát từ khoa học Ai Cập Cổ Đại, là trung tâm giáo dục của
                    Atlantic cực kỳ phát triển thời xưa
                  </p>
                  <p>
                    Ông cho rằng: <span> </span>
                    <b className="font-[700] text-[15px]">
                      Linh hồn con người là bất từ, chúng ta sống để học bài học
                      trưởng thành của linh hồn
                    </b>
                    , bằng việc sử dụng các mã số học, ông có thể phân loại
                    những dạng năng lượng nghiệp lực khác nhau của từng linh
                    hồn.
                  </p>
                  <p>
                    <b className="font-[700] text-[15px]">
                      Rung động của từng linh hồn
                    </b>{" "}
                    được đại diện và kết hợp bởi rung động năng lượng riêng của
                    từng thần số từ 1 đến 9 và những kết hợp đa dạng của nó.
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
            </div>
            <div
              className={`${
                isQuery ? "block" : "hidden"
              } sm:hidden text-[#fb6514] justify-self-start`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <p className="flex justify-center items-center gap-1">
                  Thu gọn <AiFillCaretUp color="#fb6514" />{" "}
                </p>
              ) : (
                <p className="flex justify-center items-center gap-1">
                  Xem thêm <AiFillCaretDown color="#fb6514" />{" "}
                </p>
              )}
            </div>
            <div
              className={`box-contents ${
                isOpen ? "block" : isQuery ? "hidden" : "block"
              } w-full xl:w-[429.01px] h-fit`}
            >
              <h1 className="size-title font-[700] sm:mb-5 mb-3">
                Mục đích sau cùng
              </h1>
              <div className="box-desc size-pra font-[400]">
                <b className="font-[700] text-[15px]">
                  Xác định con người có thể phát triển theo ba cách
                </b>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  <b className="font-[700] text-[15px]">
                    Đối thoại với thượng đế:
                  </b>{" "}
                  Tránh xa các việc ác, noi gương các bật Thánh, tập sống trong
                  công hạnh các ngài.
                </p>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  Bằng tài năng (trí tuệ), đó là đức tính của{" "}
                  <b className="font-[700] text-[15px]">Thánh nhân.</b>
                </p>
                <p>
                  <img
                    src={arrow2}
                    className="inline-block w-[18px] h-[15px] mr-2"
                    alt=""
                  />
                  Bằng niềm khát khao cho sự <span> </span>
                  <b className="font-[700] text-[15px]">
                    thoát ly thanh thản nhẹ nhàng linh hồn ra khỏi thể xác
                  </b>
                  , như là kết qủa từ rèn luyện để thăng hoa linh hồn...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__characteristic section bg-custom-pattern bg-fixed">
        <div className="homepage__characteristic__container  mx-auto max-w-7xl ">
          <div className="homepage__characteristic--title flex justify-start items-center text-white gap-3 mb-[30px]">
            <h1 className="text-[36px] leading-[43.57px] font-[700] px-3">
              4 đặc điểm của ông Pythagore
            </h1>
            <img
              src={frame}
              className="hidden lg:inline-block w-[481.28px] h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homepage__characteristic--wrapper flex w-full justify-center flex-wrap">
            <div className="box-contents text-white xl:mb-0 mb-[50px] xl:mr-[210px] h-fit size-pra xl:w-[429px] xl:h-[310px] w-full ">
              <div className="box-items text-[15px]  sm:mb-[20px]  px-3 font-[400] ">
                <p>
                  <img
                    src={vector}
                    className="inline-block w-[20px] h-[19.74px] mr-2"
                    alt=""
                  />
                  <b className="font-[600] text-[15px]">Khoa học:</b> Có tính
                  logic
                </p>
                <p>
                  <img
                    src={vector}
                    className="inline-block w-[20px] h-[19.74px] mr-2"
                    alt=""
                  />
                  <b className="font-[600] text-[15px]">Triết gia:</b> Đi vào
                  chiều sâu
                </p>
                <p>
                  <img
                    src={vector}
                    className="inline-block w-[20px] h-[19.74px] mr-2"
                    alt=""
                  />
                  <b className="font-[600] text-[15px]">Giáo dục:</b> Phát triển
                  con người và tầm nhìn quan trọng về trương lai
                </p>
              </div>
              <div className={`${isQuery ? " w-full" : "px-3"} `}>
                <img
                  src={imageCharacteristic2}
                  alt=""
                  className={`md:block hidden w-fit xl:mx-0 mx-auto object-contain xl:mt-[50px]`}
                />
              </div>
            </div>
            <div className={`${isQuery ? " w-full" : "px-3"} `}>
              <div
                className={`box-image w-fit xl:mx-0 mx-auto  xl:w-fit px-[30px] ${
                  isQuery ? "" : "rounded-[12px] border-[1px]"
                } py-[50px] border-[rgba(155,152,152,0.8)] border-[1px] bg-[rgba(255,255,255,0.12)] backdrop-blur-md  relative`}
              >
                <img
                  src={imageCharacteristic}
                  alt=""
                  className="block w-[535px] object-contain h-fit xl:mt-3"
                />
                <div className="absolute left-6 top-3  border-[rgba(155,152,152,0.8)] border-[1px] bg-[rgba(255,255,255,0.12)] backdrop-blur-md  font-[700] block xl:hidden text-white rounded-[6px] px-4 py-3">
                  Giải thích
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__table section">
        <div className="homePage__table__container section-container">
          <div className="homePage__table--title w-full mb-5 flex items-center gap-7 justify-center">
            <img
              src={other1}
              className="hidden xl:inline-block w-auto h-[11.31px] mr-2"
              alt=""
            />
            <h1 className=" xl:text-[36px] text-[32px] font-[700] text-center">
              Năng lượng các con số
            </h1>
            <img
              src={other2}
              className="hidden xl:inline-block w-auto h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homePage__pythagore--desc text-[18px] leading-[21.78px] mb-[30px] opacity-[80%] xl:mb-[60px] font-[500] text-center text-[#FB6514]">
            <p>
              <b className="font-[700]">Linh hồn trưởng thành:</b> Sâu sắc để sẻ
              chia, bật thầy
            </p>
          </div>
          <div className="homePage__pythagore--wrapper flex items-center justify-center gap-[50px]">
            <Table data={data} />
            <div
              className={`hidden xl:block px-[10px] w-fit py-[10px] border border-[rgba(155,152,152,0.8)] rounded-[12px]`}
            >
              <img src={image} className="block w-[156px] h-[198px]  " alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__finish bg-custom-pattern bg-fixed section">
        <div className="homePage__finish__container section-container">
          <div className="homePage__finish--title w-full flex items-center gap-7 justify-center">
            <img
              src={other1}
              className="hidden xl:inline-block w-auto h-[11.31px] mr-2"
              alt=""
            />
            <h1 className="text-white mb-5 xl:text-[36px] text-[32px] font-[700] text-center">
              Đúc kết ngắn gọn
            </h1>
            <img
              src={other2}
              className="hidden xl:inline-block w-auto h-[11.31px] ml-2"
              alt=""
            />
          </div>
          <div className="homePage__finish--desc text-[18px] leading-[21.78px] opacity-[80%]  mb-[30px] xl:mb-[60px] font-[500] text-center text-[#FB6514]">
            <p>9 con số + Số bậc thầy, 3 Gốc - 3 Độc</p>
          </div>
          <div className="homePage__finish--wrapper rounded-[12px] flex  justify-center lg-max:flex-col  px-[30px] gap-3    sm:py-[50px] lg:border-[1px] lg:border-[rgba(155,152,152,0.8) bg-transparent lg:bg-[rgba(255,255,255,0.12)] backdrop-blur-md ">
            <div className="flex flex-col items-center gap-5">
              <CardFinish data={dataFinish.slice(0, 3)} startIndex={0} />
            </div>
            <div className="flex flex-col items-center gap-5">
              <CardFinish data={dataFinish.slice(3, 7)} startIndex={3} />
            </div>
            <div className="flex flex-col items-center gap-5">
              <CardFinish data={dataFinish.slice(7, 10)} startIndex={7} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
