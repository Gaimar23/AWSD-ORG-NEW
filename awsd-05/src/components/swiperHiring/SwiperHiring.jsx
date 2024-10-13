import React from "react";
import "./swiperHiring.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//
import recrutement01 from "../../assets/images/recrutement/hiring01.jpg";
import recrutement02 from "../../assets/images/recrutement/hiring02.jpg";
import recrutement03 from "../../assets/images/recrutement/hiring03.jpg";

const SwiperHiring = () => {
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
          <img src={recrutement03} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              Recrutement <br />
            </span>
            <span
              style={{ fontWeight: "300", color: "white", fontSize: "30px" }}
              className="info"
            >
              Nous restons à votre écoute...
            </span>

            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recrutement02} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              Recrutement <br />
            </span>
            <span
              style={{ fontWeight: "300", color: "white", fontSize: "30px" }}
              className="info"
            >
              Nous restons à votre écoute...
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={recrutement01} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              Recrutement <br />
            </span>
            <span
              style={{ fontWeight: "300", color: "white", fontSize: "30px" }}
              className="info"
            >
              Nous restons à votre écoute...
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHiring;
