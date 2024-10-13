import React from "react";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import SwiperContact from "../../components/swiperContact/SwiperContact";
import { motion } from "framer-motion";
//
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <SwiperContact />
      <div className="messageUs">
        <div className="messageContainer">
          <div className="left">
            <div className="identification">
              <span className="point"></span>
              <h4 className="whichPage">Contact</h4>
            </div>
            <h1 className="title">Laissez-nous un message</h1>
            <p className="desc">
              Mauris ac consectetur leo. Mauris consequat, lectus ut bibendum
              pulvinar, leo magna feugiat enim, eu commodo lacus sem vel ante.
              Sed tempus metus eget leo mollis vulputate. Class aptent taciti
              sociosqu ad litora torquent per conubia.
            </p>
          </div>
          <div className="right">
            <form className="formContainer">
              <div className="first">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="userInfo"
                />
                <input type="email" placeholder="Email" className="userInfo" />
              </div>
              <input type="text" placeholder="Sujet" className="objet" />
              <textarea cols="30" rows="12" placeholder="Message" />
              <div className="envoyer">
                <input type="submit" value="Envoyer" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="where">
        <div className="locationAndPhone">
          <div className="left">
            <div className="icons">
              <SlLocationPin className="icon" />
            </div>
            <h3 className="title">Localisation</h3>
            <div className="details">
              <span>Douala Yassa, face Synafoc</span>
              <span>Rue 60e station le metro</span>
              <span>BP: 237 - Douala, Cameroun</span>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <MdOutlineMarkEmailUnread className="icon" />
            </div>
            <h3 className="title">Contact & Email</h3>
            <div className="details">
              <span>+237 699 24 11 51 / +237 699 24 11 51</span>
              <span>administration@afrique-awsd.org</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
