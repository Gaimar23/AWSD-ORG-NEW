import React from "react";
import "./swpHead.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";
import Slide4 from "../../assets/images/slide4.jpg";
import Slide5 from "../../assets/images/slide5.jpg";
import Slide6 from "../../assets/images/slide6.jpg";

const SwpHead = () => {
  return (
    <>
      <Swiper
        spacebetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide2} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro" style={{ fontSize: "55px" }}>
              Pour une Amélioration <br /> continue
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro" style={{ fontSize: "55px" }}>
              Pour une Amélioration <br /> continue
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro" style={{ fontSize: "55px" }}>
              Pour une Amélioration <br /> continue
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Slide5} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro" style={{ fontSize: "55px" }}>
              Pour une Amélioration <br /> continue
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={Slide6} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro" style={{ fontSize: "55px" }}>
              Pour une Amélioration <br /> continue
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwpHead;
