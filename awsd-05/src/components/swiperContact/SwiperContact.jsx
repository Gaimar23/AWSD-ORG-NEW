import React from "react";
import "./swiperContact.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import contact01 from "../../assets/images/contact/contact01.jpg";
import contact02 from "../../assets/images/contact/contact02.jpg";
import contact04 from "../../assets/images/contact/contact04.jpg";
import contact05 from "../../assets/images/contact/contact05.jpg";

const SwiperContact = () => {
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
          <img src={contact01} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              {/* Pour une Amélioration <br /> continue */}
              Contact <br />
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
        {/* <SwiperSlide>
          <img src={contact02} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              Contact <br />
            </span>
            <span
              style={{
                fontWeight: "300",
                color: "white",
                fontSize: "30px",
              }}
            >
              Nous restons à votre écoute...
            </span>
            <span className="mybtn">A venir</span>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={contact04} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              {/* Pour une Amélioration <br /> continue */}
              Contact <br />
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
          <img src={contact05} alt="" />
          <div className="libelle">
            <span className="title">AWSD</span>
            <span className="intro">
              {/* Pour une Amélioration <br /> continue */}
              Contact <br />
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

export default SwiperContact;
