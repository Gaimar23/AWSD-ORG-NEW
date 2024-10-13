import React from "react";
import "./swiperTeam.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//
import team01 from "../../assets/images/team/team001.jpg";
import team02 from "../../assets/images/team/team002.jpg";

const SwiperTeam = () => {
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
          <img src={team01} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              {/* Pour une Amélioration <br /> continue */}
              Organigramme <br />
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
          <img src={team02} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              {/* Pour une Amélioration <br /> continue */}
              Organigramme <br />
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

export default SwiperTeam;
